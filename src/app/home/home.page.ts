import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FcmService } from '../core/push-notification/fcm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: Observable<any[]>;
  token: string;

  constructor(
    private db: AngularFirestore,
    private fcmService: FcmService,
    private router: Router
  ) {
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {
    this.fcmService.listenToNotifications().subscribe(
      data => {
        console.log('FCM message: ', data);
        if (data.tap) {
          if (data.id && data.type) {
            this.router.navigate([`${data.type}/detail/${data.id}`]);
          } else if (data.url) {
            this.router.navigate([data.url]);
          }
        }
    });
  }

  async getToken(): Promise<void> {
    this.token = await this.fcmService.getToken();
  }

}

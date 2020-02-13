import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FcmService } from '../core/push-notification/fcm.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: Observable<any[]>;
  token: string;

  constructor(
    db: AngularFirestore,
    private fcmService: FcmService
  ) {
    this.items = db.collection('items').valueChanges();
  }

  async getToken(): Promise<void> {
    this.token = await this.fcmService.getToken();
  }

}

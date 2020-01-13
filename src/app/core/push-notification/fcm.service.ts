import { Injectable } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
    private firebase: FirebaseX,
    private db: AngularFirestore,
    private platform: Platform
  ) { }

  async getToken() {
    let token: string;
    if (this.platform.is('android')) {
      token = await this.firebase.getToken();
    } else if (this.platform.is('ios')) {
      token = await this.firebase.getToken();
      await this.firebase.grantPermission();
    }

    return this.saveTokenToFirestore(token);
  }

  async hasPermission() {
    const hasPermission = await this.firebase.hasPermission();
    console.log('Permission is: '  + (hasPermission ? 'granted' : 'denied'));

    return hasPermission;
  }

  private saveTokenToFirestore(token): Promise<void> {
    if (!token) { return; }

    const devicesRef = this.db.collection('devices');

    const docData = {
      token,
      userId: 'testUser' // get from auth user
    };

    return devicesRef.doc(token).set(docData);
  }

  listenToNotifications(): Observable<any> {
    return this.firebase.onMessageReceived();
  }
}

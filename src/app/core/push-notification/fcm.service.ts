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
  ) { }

  async getToken(): Promise<string> {
    try {
      const enabled = await this.firebase.hasPermission();
      if (!enabled) {
        await this.firebase.grantPermission();
      }

      const fcmToken = await this.firebase.getToken();
      if (fcmToken) {
        console.log('Got token');
        console.log('FCM token: ', fcmToken);
        this.saveTokenToFirestore(fcmToken);
      }

      return fcmToken;

    } catch (error) {
      console.warn('Notification token error', error);
    }
  }

  async hasPermission(): Promise<boolean> {
    const hasPermission = await this.firebase.hasPermission();
    console.log('Permission is: '  + (hasPermission ? 'granted' : 'denied'));

    return hasPermission;
  }

  private saveTokenToFirestore(token): Promise<void> {
    if (!token) { return; }

    const devicesRef = this.db.collection('devices');

    const docData = {
      token,
      userId: 'testUser-' + Date.now()
    };

    devicesRef.doc(token).set(docData);
  }

  listenToNotifications(): Observable<any> {
    return this.firebase.onMessageReceived();
  }
}

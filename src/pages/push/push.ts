import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Push, PushObject, PushOptions } from '@ionic-native/push';

/**
 * Generated class for the PushPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

const options: PushOptions = {
  android: {
    senderID: '423946364857'
   },
   ios: {
       alert: 'true',
       badge: true,
       sound: 'false'
   },
   windows: {}
};



@IonicPage()
@Component({
  selector: 'page-push',
  templateUrl: 'push.html',
})
export class PushPage {

  pushObject: PushObject;
  notif: PushNotif;
  pushId: string;
  isRegistered: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private push: Push, private toastCtrl: ToastController) {
  }


   ionViewWillEnter(): void {
     this.initSubscriptions();
   }

  ionViewDidLoad(): void {
    console.log('ionViewDidLoad PushPage');
  }

  initSubscriptions(): void {
    this.pushObject = this.push.init(options);
    this.pushObject.on('notification').subscribe((notification: any) => this.onNotifReceived(notification));
    this.pushObject.on('registration').subscribe((registration: any) => this.onDeviceRegistered(registration));
    this.pushObject.on('error').subscribe(error => this.onPushError(error));
  }

  onNotifReceived(notification: any): void {
    this.showToastText('Notificación recibida');
    this.notif = new PushNotif(notification.title, notification.message);
  }

  onDeviceRegistered(registration: any): void {
    this.showToastText(`Registro correcto del dispositivo en FCM`);
    console.log(`Registration ID : ${registration.registrationId}`);
    this.isRegistered = true;
    this.pushId = registration.registrationId;
  }

  onPushError(error: any): void {
    this.showToastText(`Error con las notificaciones push - ${error.message}`);
  }

  showToastText(msg: string): void {
    this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: 'bottom'
    }).present();
  }

}

class PushNotif {
  constructor(public title: string, public content: string) {}
}

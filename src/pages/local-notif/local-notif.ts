import { LocalNotif } from './LocalNotif';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';



/**
 * Generated class for the LocalNotifPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-local-notif',
  templateUrl: 'local-notif.html',
})
export class LocalNotifPage {

  localNotif: LocalNotif = {title:'', text:''};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private localNotifications: LocalNotifications) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalNotifPage');
  }

  sendLocalNotif(notif: LocalNotif): void {

    this.localNotifications.schedule({
      id: 1,
      at: new Date(new Date().getTime() + 3),
      title: notif.title,
      text: notif.text,
      sound: 'file://sound.mp3',
    });

  }

}

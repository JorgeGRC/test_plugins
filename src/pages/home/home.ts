import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToLocalStorage():void {
    this.navCtrl.push('LocalStoragePage');
  }

  goToSqlStorage(): void {
    this.navCtrl.push('SqlitePage');
  }

  goToLocalNotif(): void {
    this.navCtrl.push('LocalNotifPage');
  }

  goToDeviceInfo(): void {
    this.navCtrl.push('DeviceInfoPage');
  }

  goToSocialSharing(): void {
    this.navCtrl.push("SocialSharingPage");
  }

  goToHttp(): void {
    this.navCtrl.push('HttpPage');
  }

  goToPush(): void {
    this.navCtrl.push('PushPage');
  }

}

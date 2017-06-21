
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Device } from '@ionic-native/device';


/**
 * Generated class for the DeviceInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-device-info',
  templateUrl: 'device-info.html',
})
export class DeviceInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private device: Device ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceInfoPage');
  }

}

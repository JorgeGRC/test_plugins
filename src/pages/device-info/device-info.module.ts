import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceInfoPage } from './device-info';

import { Device } from '@ionic-native/device';

@NgModule({
  declarations: [
    DeviceInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceInfoPage),
  ],
  exports: [
    DeviceInfoPage
  ],
  providers: [
    Device
  ]
})
export class DeviceInfoPageModule {}

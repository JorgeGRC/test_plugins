import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalNotifPage } from './local-notif';

import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    LocalNotifPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalNotifPage),
  ],
  exports: [
    LocalNotifPage
  ],
  providers: [
    LocalNotifications
  ]
})
export class LocalNotifPageModule {}

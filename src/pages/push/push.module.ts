import { NgModule } from '@angular/core';
import { IonicPageModule, ToastController } from 'ionic-angular';
import { PushPage } from './push';

import { Push } from '@ionic-native/push';

@NgModule({
  declarations: [
    PushPage,
  ],
  imports: [
    IonicPageModule.forChild(PushPage),
  ],
  exports: [
    PushPage
  ],
  providers: [
    Push,
    ToastController
  ]
})
export class PushPageModule {}

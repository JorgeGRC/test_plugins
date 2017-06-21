import { NgModule } from '@angular/core';
import { IonicPageModule, ToastController } from 'ionic-angular';
import { SocialSharingPage } from './social-sharing';

import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    SocialSharingPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialSharingPage),
  ],
  exports: [
    SocialSharingPage
  ],
  providers: [
    SocialSharing,
    ToastController,
  ]
})
export class SocialSharingPageModule {}

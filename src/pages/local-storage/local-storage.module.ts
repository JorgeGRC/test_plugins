import { NgModule } from '@angular/core';
import { IonicPageModule, ToastController } from 'ionic-angular';
import { LocalStoragePage } from './local-storage';



@NgModule({
  declarations: [
    LocalStoragePage,
  ],
  imports: [
    IonicPageModule.forChild(LocalStoragePage),
  ],
  exports: [
    LocalStoragePage
  ],
  providers: [
    ToastController,
  ]
})
export class LocalStoragePageModule {}

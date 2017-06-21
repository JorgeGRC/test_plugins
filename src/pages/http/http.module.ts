import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpPage } from './http';

import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    HttpPage,
  ],
  imports: [
    IonicPageModule.forChild(HttpPage),
  ],
  exports: [
    HttpPage
  ],
  providers: [
    HTTP
  ]
})
export class HttpPageModule {}

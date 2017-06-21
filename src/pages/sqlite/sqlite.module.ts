import { NgModule } from '@angular/core';
import { IonicPageModule, ToastController } from 'ionic-angular';
import { SqlitePage } from './sqlite';

@NgModule({
  declarations: [
    SqlitePage,
  ],
  imports: [
    IonicPageModule.forChild(SqlitePage),
  ],
  exports: [
    SqlitePage
  ],
   providers: [
    ToastController,
  ]
})
export class SqlitePageModule {}

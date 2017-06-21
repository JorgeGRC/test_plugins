import { NativeStorage } from '@ionic-native/native-storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LocalStoragePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

const dataKey = 'myItem';

@IonicPage()
@Component({
  selector: 'page-local-storage',
  templateUrl: 'local-storage.html',
})
export class LocalStoragePage {


  persistedData: string;
  isDataAvailable: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private nativeStorage: NativeStorage, private toastCtrl: ToastController) {
  }


  ionViewWillEnter() {
    this.nativeStorage.getItem(dataKey).then(
      data => {
        this.persistedData = data;
        this.isDataAvailable = true;
      },
      error => this.showErrorToast(`Error al recuperar los datos: ${error}`)
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalStoragePage');
  }

  overwriteData(data: string) {
    this.nativeStorage.setItem(dataKey, data).then(
      () => {
        this.showSuccessToast('Datos guardados correctamente');
        this.isDataAvailable = true;
      }, 
      error => this.showErrorToast(error)
    );
  }

  retrieveData() {
    this.nativeStorage.getItem(dataKey).then(
      data => this.persistedData = data,
      error => this.showErrorToast(`Error al recuperar los datos: ${error}`)
    );
  }
  
  showSuccessToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: 'bottom'
    });

    toast.present();
  }

  showErrorToast(error) {
    let toast = this.toastCtrl.create({
      message: error,
      duration: 4000,
      position: 'bottom'
    });

    toast.present();
  }

}

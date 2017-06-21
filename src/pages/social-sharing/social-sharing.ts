import { SocialSharing } from '@ionic-native/social-sharing';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the SocialSharingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-social-sharing',
  templateUrl: 'social-sharing.html',
})
export class SocialSharingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private socialSharing: SocialSharing, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialSharingPage');
  }


  generalShare(): void {

  }

  emailShare(emailTarget: string): void {
    console.log(`Destinatario del email: ${emailTarget}`);

    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
      this.socialSharing.shareViaEmail('Body', 'Subject', [emailTarget]).then(() => {
        this.showSuccessToast('Compartido por email con éxito');
      }).catch((error) => {
        // Error!
        this.showErrorToast(`Error al enviar el email - ${error}`);
      });
    }).catch(() => {
      // Sharing via email is not possible
      this.showErrorToast('No es posible compartir vía email');
    });
  }

  facebookShare(): void {
    this.socialSharing.shareViaFacebook('publicación de prueba vía Facebook', '', 'http://adnmobilesolutions.com')
    .then(() => {
      this.showSuccessToast('Compartido por facebook con éxito');
    })
    .catch(()=>{
      this.showErrorToast('No es posible compartir vía facebook');
    });
  }

  twitterShare(): void {
    this.socialSharing.shareViaTwitter('publicación de prueba vía Twitter #ADN #Awesome #CATED', '', 'http://adnmobilesolutions.com')
    .then(() => {
      this.showSuccessToast('Compartido por twitter con éxito');
    })
    .catch(()=>{
      this.showErrorToast('No es posible compartir vía twitter');
    });
  }

  whatsappShare(): void {
        this.socialSharing.shareViaWhatsApp('publicación de prueba vía Whatsapp', '', 'http://adnmobilesolutions.com')
    .then(() => {
      this.showSuccessToast('Compartido por whatsapp con éxito');
    })
    .catch(()=>{
      this.showErrorToast('No es posible compartir vía whatsapp');
    });
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

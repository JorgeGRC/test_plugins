import { HTTP } from '@ionic-native/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HttpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-http',
  templateUrl: 'http.html',
})
export class HttpPage {

  response1: HttpResponse = new HttpResponse();
  response2: HttpResponse = new HttpResponse();
  response3: HttpResponse = new HttpResponse();


  debugTest: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: HTTP) {
  }

    // Petición SIN USAR certificate pinning
  getServersData(): void {
    this.http.enableSSLPinning(false);
    this.http.get('https://dirce.mycated.com/dirce/rest/api/customerServer', {}, {})
      .then(data => {
        this.debugTest = JSON.stringify(data);
        this.response1 = new HttpResponse(data.status, data.data, data.headers);
        console.log(JSON.stringify(this.response1));
      })
      .catch(error => {
        this.response1 = new HttpResponse(error.status, error.data, error.headers, error.error);
      });

  }

  // Envía una petición que fallará por el cert. pinning
  sendFailedCertRequest() {
    this.http.enableSSLPinning(true)
    .then(()=>{
      this.http.get('https://www.google.es/',{},{})
     .then(data => {
        this.response2 = new HttpResponse(data.status, data.data, data.headers);
      })
      .catch(error => {
        this.response2 = new HttpResponse(error.status, error.data, error.headers, error.error);
      });
    })
    .catch(error => console.log('Error al activar el cert.pinning -' + error));
  }

  // Envía una petición que no fallará por el cert pinning
  sendSuccessCertRequest() {
    this.http.enableSSLPinning(true)
    .then(() => {

       this.http.get('https://dirce.mycated.com/dirce/rest/api/customerServer', {}, {})
      .then(data => {
        this.response3= new HttpResponse(data.status, data.data, data.headers);
      })
      .catch(error => {
        this.response3 = new HttpResponse(error.status, error.data, error.headers, error.error);
      });
    })

    .catch(error => console.log('Error al activar el cert.pinning -' + error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HttpPage');
  }

}
  
  class HttpResponse {
    constructor(
      public status: number = 0,
      public data: string =  '',
      public headers: Object =  '',
      public error: string =  ''){}
  }

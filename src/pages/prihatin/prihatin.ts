import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { PrihatinSuccessPage } from '../prihatin-success/prihatin-success';

/*
  Generated class for the Prihatin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-prihatin',
  templateUrl: 'prihatin.html'
})
export class PrihatinPage {

  // phoneNumber: string = "33286";
  phoneNumber: string = "33286";
  textMessage: string;
  amount:number;
  loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private sms: SMS) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrihatinPage');
  }

  initSendSMS(){
    var message = "TPK3M"+this.amount;
    this.textMessage = message;
    console.log(message);
    this.sendSMS();
  }


  sendSMS() {
    this.sms.send(this.phoneNumber, this.textMessage).then((result) => {
      this.gotoSuccessPage();
    }, (error) => {
      let errorToast = this.toastCtrl.create({
        message: "SMS tidak dapat dihantar.",
        duration: 3000
      })
      errorToast.present();
    });
  }


  gotoSuccessPage(){
    this.navCtrl.setRoot(PrihatinSuccessPage);
  }


}

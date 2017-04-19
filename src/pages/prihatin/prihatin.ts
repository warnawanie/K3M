import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrihatinPage');
  }


    login(){
    this.navCtrl.setRoot(PrihatinSuccessPage);
  }


}

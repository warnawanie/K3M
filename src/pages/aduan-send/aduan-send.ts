import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-aduan-send',
  templateUrl: 'aduan-send.html'
})
export class AduanSendPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AduanSendPage');
  }
  onGoToHome(){
    this.navCtrl.setRoot(HomePage);
  }
}

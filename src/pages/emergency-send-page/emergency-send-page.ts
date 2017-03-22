import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-emergency-send-page',
  templateUrl: 'emergency-send-page.html'
})
export class EmergencySendPagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergencySendPagePage');
  }
    onGoToHome(){
    this.navCtrl.setRoot(HomePage);
  }

}

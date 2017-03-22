import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';


@Component({
  selector: 'page-tentang',
  templateUrl: 'tentang.html'
})
export class TentangPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TentangPage');
  }

}

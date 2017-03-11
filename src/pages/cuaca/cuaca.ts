import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';


@Component({
  selector: 'page-cuaca',
  templateUrl: 'cuaca.html'
})
export class CuacaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuacaPage');
  }

}

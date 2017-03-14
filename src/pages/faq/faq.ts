import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html'
})
export class FaqPage {

  shownGroup = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
    };
    isGroupShown(group) {
        return this.shownGroup === group;
    };
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

}

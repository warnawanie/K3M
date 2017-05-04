import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';


@Component({
  selector: 'page-talian',
  templateUrl: 'talian.html'
})
export class TalianPage {
 shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService) {}


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
    console.log('ionViewDidLoad TalianPage');
  }

}

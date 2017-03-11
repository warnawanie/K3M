import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { State}  from '../../app/shared/sdk/models';
import { StateApi }  from '../../app/shared/sdk/services';

@Component({
  selector: 'page-pasang',
  templateUrl: 'pasang.html'
})
export class PasangPage {
  shownGroup = null;
  states:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService, private stateApi:StateApi) {

    this.stateApi.find().subscribe(
      data => {
        this.states = data;
    },
    err => {
        console.log("Oops!");
    }
    );

  }

  myDate: String = new Date().toISOString();

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
    console.log('ionViewDidLoad PasangPage');
  }

}

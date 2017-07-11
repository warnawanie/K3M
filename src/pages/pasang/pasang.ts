import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController  } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { State}  from '../../app/shared/sdk/models';
import { StateApi }  from '../../app/shared/sdk/services';
import { TideLocation}  from '../../app/shared/sdk/models';
import { TideLocationApi }  from '../../app/shared/sdk/services';
import * as moment from 'moment';


@Component({
  selector: 'page-pasang',
  templateUrl: 'pasang.html'
})
export class PasangPage {

    moment = moment;
  shownGroup = null;
  loader: any;
  states:any;
  state_id:number;
  //id:number;
  locations:any;
  responses:any;
  tmp:any;
  keys: String[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService, private stateApi:StateApi, private tideLocationApi:TideLocationApi, public loadingCtrl: LoadingController) {

    this.stateApi.find({
            "include":{
              "relation": "locations"
            }

    }).subscribe(
      data => {
        this.states = data;
        console.log(data);

    },
    err => {
        console.log("Oops!");
    }
    );

    
  }

  optionsFn(){

    this.tideLocationApi.find({
           where: {
             state_id: this.state_id
          }
    }).subscribe(
      data => {
        this.locations = data;
        //console.log(data);
    }, 
    err => {
        console.log("Oops!");
    }
    );
    
    //console.log(this.state_id);

    
  }



  private responseData(location : any) {
    this.loader = this.loadingCtrl.create({
              content: "Loading"
            });
           this.loader.present();

      console.log(location);
    this.tideLocationApi.getForecast(location.id)
    
      .subscribe(
        data => {
          this.loader.dismiss();
          this.responses = data;
        //  this.keys = Object.keys(this.responses);
          console.log(data);
      }, 
      err => {
          console.log("Oops!");
      }
    );
   // console.log(id);
  }

  pad(num, size) {
      let s = "000000000" + num;
      s = s.substr(s.length-size);

      return s.substring(0, 2) + ":" + s.substring(2);
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

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { State}  from '../../app/shared/sdk/models';
import { StateApi }  from '../../app/shared/sdk/services';
import { TideLocation}  from '../../app/shared/sdk/models';
import { TideLocationApi }  from '../../app/shared/sdk/services';

@Component({
  selector: 'page-pasang',
  templateUrl: 'pasang.html'
})
export class PasangPage {
  shownGroup = null;
  states:any;
  state_id:number;
  //id:number;
  locations:any;
  responses:any;
  tmp:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService, private stateApi:StateApi, private tideLocationApi:TideLocationApi) {

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
      console.log(location);
    this.tideLocationApi.getForecast(location.id).subscribe(
      data => {
        //this.responses = data;
        console.log(data);
    }, 
    err => {
        console.log("Oops!");
    }
    );

   // console.log(id);
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

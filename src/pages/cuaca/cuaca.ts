import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { TranslateService } from 'ng2-translate';
import { Weather}  from '../../app/shared/sdk/models';
import { WeatherApi }  from '../../app/shared/sdk/services';
import { LocationTracker } from '../../providers/location-tracker';

@Component({
  selector: 'page-cuaca',
  templateUrl: 'cuaca.html'
})
export class CuacaPage {

   posts:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService,public loadingCtrl: LoadingController, private weatherApi: WeatherApi, public locationTracker: LocationTracker) {


    this.locationTracker.startTracking();

    this.weatherApi.myLocation(locationTracker.lat, locationTracker.lng).subscribe(
      data => {
        this.posts = data;
        console.log(data);
    },
    err => {
        console.log("Oops!");
    });





    
  }


   //start(){
    //this.locationTracker.startTracking();
 // }
 
  //stop(){
    //this.locationTracker.stopTracking();
 // }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad CuacaPage');
  }

}

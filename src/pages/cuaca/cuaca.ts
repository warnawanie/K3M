import { Component} from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { TranslateService } from 'ng2-translate';
import { WeatherApi }  from '../../app/shared/sdk/services';
import { LocationTracker } from '../../providers/location-tracker';
import * as moment from 'moment';

@Component({
  selector: 'page-cuaca',
  templateUrl: 'cuaca.html'
})
export class CuacaPage {
  loader: any;
   posts:   any;

   pagi:    any;
   petang:  any;
   malam:   any;
   daily:  any;
   moment = moment;
   locationName: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService,public loadingCtrl: LoadingController, private weatherApi: WeatherApi, public locationTracker: LocationTracker) {

     this.loader = this.loadingCtrl.create({
      content: "Loading Data"
    });

  this.loader.present();

         //setTimeout(() => {
          // this.loader.dismiss();
     // }, 1500);


  }

   myDate: String = new Date().toISOString();

  loadLocationWeather(){

    Geolocation.getCurrentPosition().then((position) => {

      this.weatherApi.myLocation(position.coords.latitude, position.coords.longitude).subscribe(
        data => {
          this.posts = data;
          console.log(data);
          console.log(data.hourly);


          // This is to test data
          for (var i = 0; i < data.hourly.data.length; ++i) {
            var temp:any = data.hourly.data[i];
            var temp_time:any = moment.unix(temp.time);
            // console.log(temp_time);
          }

          console.log("=================================");

          // Assign value kat sini
          this.pagi = data.hourly.data[5];     // amek kol 6 pagi
          this.petang = data.hourly.data[15];   // amek kol 4 petang
          this.malam = data.hourly.data[20];    // amek kol 9 malam

          console.log(this.pagi);
          console.log(this.petang);
          console.log(this.malam);

          // data untuk mingguan
          this.daily = data.daily.data;
          // This is to test data
          for (var i = 0; i < this.daily.length; ++i) {
            var temp:any = this.daily[i];
            var temp_time:any = moment.unix(temp.time);
            // console.log(temp_time);
          }

          // remove last element
          this.daily.pop();

             this.loader.dismiss();
          this.locationName = data.location.name;
          console.log("locationName = " + this.locationName);

      },
      err => {
          console.log("Oops!");
      });

    }, (err) => {
      console.log(err);
    });
  }


   //start(){
    //this.locationTracker.startTracking();
 // }

  //stop(){
    //this.locationTracker.stopTracking();
 // }

  ionViewDidLoad() {

    let now = moment().format('DD');
   console.log(now);

   this.loadLocationWeather();
  }

}

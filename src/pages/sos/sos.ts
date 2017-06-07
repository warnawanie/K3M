import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { TranslateService } from 'ng2-translate';
import { Emergency}  from '../../app/shared/sdk/models';
import { EmergencyApi }  from '../../app/shared/sdk/services';
import { EmergencySendPagePage } from '../emergency-send-page/emergency-send-page';
import { Customer}  from '../../app/shared/sdk/models';
import { CustomerApi }  from '../../app/shared/sdk/services';
import { HomePage } from '../home/home';


declare var google;

@Component({
  selector: 'page-sos',
  templateUrl: 'sos.html'
})
export class SosPage {
  loader: any;

  public emergency: Emergency = new Emergency();
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor( public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public translateService: TranslateService, private customerApi: CustomerApi, private emergencyApi: EmergencyApi, private geolocation: Geolocation) {


    // Predefined emergency data
    this.customerApi.getCurrent().subscribe( data => {
      this.emergency.customer_id = data.id;
    });
  }





  ionViewLoaded(){
    this.loader = this.loadingCtrl.create({
      content: "Loading Maps"
    });

    this.loader.present();

    // setTimeout(() => {
    //   this.loader.dismiss();
    // }, 1500);
    
    this.loadMap();
  }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      this.emergency.latitude = position.coords.latitude;
      this.emergency.longitude = position.coords.longitude;

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });

      let content = "Lokasi Anda";          

      this.addInfoWindow(marker, content);

      //this.loader.dismiss();
      console.log(position.coords.latitude, position.coords.longitude);
      this.loader.dismiss();
    }, (err) => {
      console.log(err);
    });
  }


  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }



  sendSos() {
    this.loader = this.loadingCtrl.create({
      content: "Loading"
    });

    this.loader.present();

    setTimeout(() => {
      this.loader.dismiss();
    }, 1000);

    this.emergencyApi.create(this.emergency).subscribe((emergency: Emergency) => this.navCtrl.setRoot(EmergencySendPagePage));
  }


  onGoToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SosPage');
    this.ionViewLoaded();

  }

}

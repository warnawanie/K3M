import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { TranslateService } from 'ng2-translate';
import { Emergency}  from '../../app/shared/sdk/models';
import { EmergencyApi }  from '../../app/shared/sdk/services';
import { EmergencySendPagePage } from '../emergency-send-page/emergency-send-page';
import { CustomerApi }  from '../../app/shared/sdk/services';
import { HomePage } from '../home/home';

import { GoogleMaps } from '../../providers/google-maps';


declare var google;

@Component({
  selector: 'page-sos',
  templateUrl: 'sos.html'
})

export class SosPage {
  loader: any;

  public emergency: Emergency = new Emergency();

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  map: any;

  constructor( public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public translateService: TranslateService, private customerApi: CustomerApi, private emergencyApi: EmergencyApi, public geolocation: Geolocation, public maps: GoogleMaps) {


    // Predefined emergency data
    this.customerApi.getCurrent().subscribe( data => {
      this.emergency.customer_id = data.id;
    });
    this.updateSOSData();
  }





  ionViewLoaded(){

    console.log("===========================================================");
    this.showLoader();
    // this.loadMap();
    this.loadMapV2();
  }

  //  v2
  loadMapV2(){
    let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() => {
      this.loader.dismiss();
      this.addMarker();
      console.log('######################################################');
    });
  }

  updateSOSData(){
    this.geolocation.getCurrentPosition().then((position) => {
      this.emergency.latitude = position.coords.latitude;
      this.emergency.longitude = position.coords.longitude;
      console.log(position);
      console.log(this.emergency);
      console.log("updateSOSData");
    }, (err) => {
      console.log(err);
    });
  }






  //  v1
  showLoader(){
    this.loader = this.loadingCtrl.create({
      content: "Loading Maps"
    });
    this.loader.present();
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
      //this.loader.dismiss();
      console.log(position.coords.latitude, position.coords.longitude);
      this.loader.dismiss();
    }, (err) => {
      console.log(err);
    });
  }

  addMarker(){
    let marker = new google.maps.Marker({
      map: this.maps.map,
      animation: google.maps.Animation.DROP,
      position: this.maps.map.getCenter()
    });

    let content = "Lokasi Anda";

    this.addInfoWindow(marker, content);
  }


  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.maps.map, marker);
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

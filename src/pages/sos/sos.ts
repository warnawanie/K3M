import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { TranslateService } from 'ng2-translate';
import { Emergency}  from '../../app/shared/sdk/models';
import { EmergencyApi }  from '../../app/shared/sdk/services';
import { EmergencySendPagePage } from '../emergency-send-page/emergency-send-page';
import { Customer}  from '../../app/shared/sdk/models';
import { CustomerApi }  from '../../app/shared/sdk/services';


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

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public translateService: TranslateService, private customerApi: CustomerApi, private emergencyApi: EmergencyApi) {
  
  this.ionViewLoaded();


  this.loader = this.loadingCtrl.create({
      content: "Loading Maps"
    });

  this.loader.present();
   
          setTimeout(() => {
            this.loader.dismiss();
        }, 1000);


  this.customerApi.getCurrent().subscribe(
      
        data => {
          this.emergency.customer_id = data.id;        
        }
     ); 


   }

  ionViewLoaded(){
    this.loadMap();
  }

  loadMap(){

  Geolocation.watchPosition().subscribe((position) => {
  this.emergency.latitude = position.coords.longitude;
  this.emergency.longitude = position.coords.latitude;
  

  let latLng = new google.maps.LatLng(this.emergency.latitude, this.emergency.longitude);
  });


 
    Geolocation.getCurrentPosition().then((position) => {
 
 
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
 
  let content = "<div class='sos-location'>4.2275° N, 100.5577° E</div><h4 class='sos-heading'>Hantar SOS?</h4> <div class='sos-action'><button ion-button class='green-button' (click)='getCoordinate()'>Ya</button> <button ion-button color='danger' class='red-button'>Tidak</button></div>";          
 

 
  this.addInfoWindow(marker, content);
  console.log(position.coords.latitude, position.coords.longitude);
  
 
    }, (err) => {
      console.log(err);
    });


    
    
 
  }

  addMarker(){
 
  
 
}


getCoordinate(){
      Geolocation.getCurrentPosition().then((position) => {
      //let latLng = new google.maps.LatLng();

       console.log(position.coords.latitude, position.coords.longitude);
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



  ionViewDidLoad() {
    console.log('ionViewDidLoad SosPage');

  }

}

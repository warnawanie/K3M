import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { TranslateService } from 'ng2-translate';


declare var google;

@Component({
  selector: 'page-sos',
  templateUrl: 'sos.html'
})
export class SosPage {
     
 
   
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translateService: TranslateService) {
  
  this.ionViewLoaded();

  }

  ionViewLoaded(){
    this.loadMap();
  }

  loadMap(){
 
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SosPage');

  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Announcement}  from '../../app/shared/sdk/models';
import { AnnouncementApi }  from '../../app/shared/sdk/services';

@Component({
  selector: 'page-pengumuman-details',
  templateUrl: 'pengumuman-details.html'
})

export class PengumumanDetailsPage {

  private announcement:Announcement;

  constructor(public navCtrl: NavController, public navParams: NavParams, private announcementApi: AnnouncementApi) {
    
    this.announcement = navParams.get('data'); 
    
    
    console.log(this.announcement);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PengumumanDetailsPage');
  }

}

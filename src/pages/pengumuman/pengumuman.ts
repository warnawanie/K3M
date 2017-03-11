import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { PengumumanService } from '../../providers/pengumuman-service';
import { Announcement}  from '../../app/shared/sdk/models';
import { AnnouncementApi }  from '../../app/shared/sdk/services';
import { PengumumanDetailsPage} from '../pengumuman-details/pengumuman-details';
import { TranslateService } from 'ng2-translate';
//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';


@Component({
  selector: 'page-pengumuman',
  templateUrl: 'pengumuman.html'
})

export class PengumumanPage {

  posts:any;


//public http: Http
//public pengumumanService: PengumumanService,

  constructor(public navCtrl: NavController, public navParams: NavParams, private announcementApi: AnnouncementApi, public translateService: TranslateService) {

    this.announcementApi.find().subscribe(
      data => {
        this.posts = data;
    },
    err => {
        console.log("Oops!");
    }


    ); 

     //this.http.get('https://rakam.onsetfocus.com/api/announcements').map(res => res.json()).subscribe(
    //data => {
      //  this.posts = data;
    //},
    //err => {
      //  console.log("Oops!");
    //}

  }

  goTo(post:Announcement):void{

    //console.log(post.id);
    this.navCtrl.push(PengumumanDetailsPage, {data:post});
    
    
  }


 ionViewDidLoad() {
 //   this.pengumumanService.getPengumumanData();
  }

}

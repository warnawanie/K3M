import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { CuacaPage } from '../cuaca/cuaca';
import { PasangPage } from '../pasang/pasang';
import { PengumumanPage } from '../pengumuman/pengumuman';
import { TalianPage } from '../talian/talian';
import { AduanPage } from '../aduan/aduan';
import { AduanV2Page } from '../aduan/aduan-v2';
import { SosPage } from '../sos/sos';
// import { FaqPage } from '../faq/faq';
import { TentangPage } from '../tentang/tentang';
import { SosialPage } from '../sosial/sosial';
import { TranslateService } from 'ng2-translate';
import { PrihatinPage } from '../prihatin/prihatin';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public translateService: TranslateService) {

    //this.presentLoading();
  //  this.loader.dismiss();

   // storage.ready().then(() => {

       // Or to get a key/value pair
      // storage.get('name').then((val) => {
      //   console.log('Your age is', val);
      // })
    // });


  }

  onGoToCuaca(){
    this.navCtrl.push(CuacaPage);
  }
   onGoToPengumuman(){
    this.navCtrl.push(PengumumanPage);
  }
   onGoToTalian(){
    this.navCtrl.push(TalianPage);
  }
   onGoToAduan(){
    this.navCtrl.push(AduanV2Page);
  }
   onGoToSos(){
    this.navCtrl.push(SosPage);
  }
   onGoToTentang(){
    this.navCtrl.push(TentangPage);
  }
   onGoToSosial(){
    this.navCtrl.push(SosialPage);
  }
   onGoToPasang(){
    this.navCtrl.push(PasangPage);
  }

  onGoToFaq(){
    this.navCtrl.push(PrihatinPage);
  }
  onGoToForum(){
    this.navCtrl.push(PasangPage);
  }


  translateToMandarin(){
  this.translateService.use('cn');
 }
 translateToMalay(){
  this.translateService.use('ms');
}
translateToEnglish(){
  this.translateService.use('en');
  }


  presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: "Loading"
    });


    this.loader.present();


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}

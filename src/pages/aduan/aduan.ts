import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { AduanSendPage } from '../aduan-send/aduan-send';
import { Report } from '../../app/shared/sdk/models';
import { ReportApi } from '../../app/shared/sdk/services';
import { Customer}  from '../../app/shared/sdk/models';
import { CustomerApi }  from '../../app/shared/sdk/services';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'page-aduan',
  templateUrl: 'aduan.html'
})
export class AduanPage {

  public aduan: Report = new Report();
  aduanData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,public actionsheetCtrl: ActionSheetController, private reportApi: ReportApi, private customerApi: CustomerApi, public translateService: TranslateService) {

    this.customerApi.getCurrent().subscribe(
      
        data => {
          this.aduan.customer_id = data.id;
          this.aduan.name = data.fullname;
          this.aduan.ic_number = data.ic_number;
          this.aduan.phone_number = data.phone_number;
        
         // console.log(this.aduan.name);
        }
     ); 

     //this.aduan = this.aduanData.get('fullname');


  }


//  setQuantity(value) {
  //  this.aduan = value;
    //this.aduanData.user(this.aduan);
  //}


   report() {
   // report.name = customer.fullname
    this.reportApi.create(this.aduan).subscribe((aduan: Report) => this.navCtrl.setRoot(AduanSendPage));
   }




  ionViewDidLoad() {
    console.log('ionViewDidLoad AduanPage');
  }
  

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Lampiran Gambar',
      cssClass: 'action-upload-image',
      buttons: [
        
        {
          text: 'Camera',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Camera clicked');
          }
        },
        {
          text: 'Album',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Album clicked');
          }
        },
        {
          text: 'Video',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Video clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

 


  onGoToAduanSend(){
    this.navCtrl.setRoot(AduanSendPage);
  }
}

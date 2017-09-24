import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Customer } from '../../app/shared/sdk/models';
import { CustomerApi } from '../../app/shared/sdk/services';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
   loader: any;


  public account: Customer = new Customer();

  constructor(public navCtrl: NavController, public navParams: NavParams, private accountApi: CustomerApi, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {}

register() {
   // this.accountApi.create(this.account).subscribe((account: Customer) => this.navCtrl.setRoot(LoginPage));
       this.loader = this.loadingCtrl.create({
                content: "Loading"
              });

              this.loader.present();



   this.accountApi.create(this.account).subscribe((account: Customer) => {


          this.loader.dismiss();


            let alert = this.alertCtrl.create({
            title: 'Akaun K3M anda telah berjaya didaftarkan. Terima Kasih',
            buttons: ['OK']
              });
            alert.present();

            this.navCtrl.setRoot(LoginPage);

        },  error => {

            this.loader.dismiss();
            let alert = this.alertCtrl.create({
            title: 'Sila isikan semua maklumat di dalam ruangan yang disediakan',
            subTitle: 'Cuba lagi',
            buttons: ['OK']
          });
          alert.present();
           //this.loader.dismiss();

                });

 }















  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}

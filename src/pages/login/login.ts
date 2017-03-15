import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController   } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { Customer, AccessToken } from '../../app/shared/sdk/models';
import { CustomerApi } from '../../app/shared/sdk/services';
//import { Storage } from '@ionic/storage';
//import { Router } from '@angular/router';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loader: any;

  public account: Customer = new Customer();
  public rememberMe: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private accountApi: CustomerApi, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

  //  storage.ready().then(() => {
       // set a key/value
    //   storage.set('name', username);
    // });
     

  }
  


  onGoToRegister(){
    this.navCtrl.push(RegisterPage);
  }

  onGoToHome(){
    this.navCtrl.setRoot(HomePage);
  }

// register() {
    //this.accountApi.create(this.account).subscribe((account: Customer) => this.login());
 // }

  login() {

         this.accountApi.login(this.account, 'user', this.rememberMe).subscribe((token: AccessToken) => { 


              this.loader = this.loadingCtrl.create({
                content: "Loading"
              });    
              this.loader.present();

            this.navCtrl.setRoot(HomePage);  
            this.loader.dismiss();              
        },  error => {

        
          
            let alert = this.alertCtrl.create({
            title: 'Incorrect Username or Password',
            subTitle: 'Try Again!',
            buttons: ['OK']
          });
          alert.present();
           //this.loader.dismiss();

                });
                


    //this.accountApi.login(this.account, 'user', this.rememberMe).subscribe((token: AccessToken) =>
      //
     // console.log(this);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}



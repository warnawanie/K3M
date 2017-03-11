import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  public account: Customer = new Customer();
  public rememberMe: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private accountApi: CustomerApi) {

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
    this.accountApi.login(this.account, 'user', this.rememberMe).subscribe((token: AccessToken) =>
      this.navCtrl.setRoot(HomePage));
      console.log(this);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
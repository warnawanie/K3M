import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Customer, AccessToken } from '../../app/shared/sdk/models';
import { CustomerApi } from '../../app/shared/sdk/services';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  public account: Customer = new Customer();

  constructor(public navCtrl: NavController, public navParams: NavParams, private accountApi: CustomerApi) {}

register() {
    this.accountApi.create(this.account).subscribe((account: Customer) => this.navCtrl.setRoot(LoginPage));
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}

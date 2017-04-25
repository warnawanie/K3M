import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { Customer}  from '../../app/shared/sdk/models';
import { CustomerApi }  from '../../app/shared/sdk/services';

@Component({
  selector: 'page-prihatin-success',
  templateUrl: 'prihatin-success.html'
})
export class PrihatinSuccessPage {
  loader: any;
   posts:   any;

   pagi:    any;
   petang:  any;
   malam:   any;
   daily:  any;
   moment = moment;
   locationName: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private customerApi: CustomerApi) {

    this.customerApi.getCurrent().subscribe(
      
      data => {
        this.posts = data;
        console.log(this.posts);
    },
    err => {
        console.log("Oops!");
    }
       //console.log(customerApi)
    ); // This will call from the backend the current user
    this.customerApi.getCachedCurrent(); // This will return the current logged user from memory
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrihatinSuccessPage');
  }
  

}

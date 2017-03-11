import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Customer}  from '../../app/shared/sdk/models';
import { CustomerApi }  from '../../app/shared/sdk/services';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  posts:any;

  constructor(public navCtrl: NavController, private customerApi: CustomerApi) {

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


  

}
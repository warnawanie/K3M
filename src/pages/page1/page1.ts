import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CustomerApi }  from '../../app/shared/sdk/services';
import { Customer } from '../../app/shared/sdk/models';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {


  posts:any;
  public account: Customer = new Customer();

  constructor(public navCtrl: NavController, private customerApi: CustomerApi) {
    
    this.customerApi.getCurrent().subscribe(

      data => {
        this.posts = data;
        console.log(this.posts);
        this.account = data;
      },
      err => {
        console.log("Oops! " + JSON.stringify(err));
      }
        //console.log(customerApi)
    ); // This will call from the backend the current user

    this.customerApi.getCachedCurrent(); // This will return the current logged user from memory

  }

  convertIC(){
    this.account.ic_number = this.account.ic_number.replace(/-/g, '');
  }
}

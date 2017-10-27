import { Component } from '@angular/core';

import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { CustomerApi }  from '../../app/shared/sdk/services';
import { Customer } from '../../app/shared/sdk/models';
import { TranslateService } from 'ng2-translate';



@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  public oldPassword: string; 
  public newPassword: string;
  public profileSuccess: string;
  public invalidPassword: string;
  public insertOldPassword: string;

  posts:any;
  public account: Customer = new Customer();

  constructor(public loadingCtrl: LoadingController, public translateService: TranslateService, public alertCtrl: AlertController, public navCtrl: NavController, private customerApi: CustomerApi) {
    this.oldPassword = '';
    this.newPassword = '';

    translateService.get('PROFILE_SUCCESS').subscribe(
      value => {
        this.profileSuccess = value;
      }
    )

    translateService.get('INVALID_PASSWORD').subscribe(
      value => {
        this.invalidPassword = value;
      }
    )

    translateService.get('INSERT_OLD_PASSWORD').subscribe(
      value => {
        this.insertOldPassword = value;
      }
    )

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

  updateProfile(){
    this.convertIC();

    if(this.newPassword.trim() != ''){
      
      if(this.oldPassword.trim() != ''){

        this.changePassword().then(response=>{
          console.log('Change password successful: ' + JSON.stringify(response));
        }).catch(err=>{
          if(err.message == 'Invalid current password'){
            this.displayAlert(this.invalidPassword)
            
          } else {
            this.displayAlert('Error: '+JSON.stringify(err));
          }
          return;
        })

      } else {
        this.displayAlert(this.insertOldPassword);
        return;
      }
    }

    let loader = this.loadingCtrl.create({
      spinner: 'circles'
    })

    loader.present();

    this.customerApi.patchAttributes(this.account.id, this.account)
    .subscribe((account: Customer) => {
      loader.dismiss()
      this.displayAlert(this.profileSuccess);  
      console.log(account);
    }, err => {
      this.displayAlert('Error: ' + err)
    })
    
  }

  changePassword(): Promise<any> {
    return new Promise((resolve, reject) => {
      
      this.customerApi.changePassword(this.oldPassword, this.newPassword)
      .subscribe((response: any) => {
        resolve();
      }, err => {
        console.log('error: ' + JSON.stringify(err));
        reject(err)
      })

    })
  }

  displayAlert(message: string){
    let alert = this.alertCtrl.create({
      title: message,
      buttons: ['OK']
    });
    alert.present();
  }


}

import { AccessToken } from './../../app/shared/sdk/models/BaseModels';
import { Component } from '@angular/core';

import { NavController, ViewController, LoadingController, AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { CustomerApi }  from '../../app/shared/sdk/services';
import { LoopBackAuth } from '../../app/shared/sdk/services/core/auth.service';

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html'
})
export class ForgotPassword {

  posts:any;
  phoneNumber:string = "";
  tempPassword:string = "";
  currentStep:number = 1;

  verifyRequestId: string = "";
  verifyCode: string = "";
  resetPasswordToken: any = "";
  tempAccessToken:AccessToken;

  public checkPhoneNumberForm:FormGroup;
  public temporaryPasswordForm:FormGroup;
  public changePasswordForm:FormGroup;


  constructor(
    public navCtrl: NavController,
    private customerApi: CustomerApi,
    private loopbackAuth: LoopBackAuth,
    public viewCtrl:ViewController,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {

    this.checkPhoneNumberForm = this.formBuilder.group({
      phoneNumber: ['', Validators.required],
    });

    this.temporaryPasswordForm = this.formBuilder.group({
      verificationCode: ['', Validators.required],
    });

    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },{
      validator: PasswordValidation.MatchPassword // your validation method
    });

  }

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  checkPhoneNumber(){
    console.log(this.checkPhoneNumberForm.value);
    let _phoneNumber = this.checkPhoneNumberForm.value.phoneNumber;
    console.log(_phoneNumber);
    this.customerApi.checkPhoneNumber(_phoneNumber).subscribe(
      data =>{
        console.log( data );
        this.currentStep = 2;
        this.phoneNumber = _phoneNumber;
      },
      error =>{
        console.log( error );
        let alert = this.alertCtrl.create({
        title: 'Nombor telefon tiada di dalam sistem',
        buttons: ['Tutup']
          });
        alert.present();
      }
    );
  }

  verificationSendSMS(){
    console.log(this.phoneNumber);
    this.customerApi.verificationCodeSendSMS(this.phoneNumber).subscribe(
      data =>{
        console.log( data );
        this.verifyRequestId = data.verifyRequestId;
        this.currentStep = 3;

        let alert = this.alertCtrl.create({
          title: 'Kod verifikasi telah dihantar. Sila semak SMS anda',
          buttons: ['Tutup']
            });
          alert.present();

      },
      error =>{
        console.log( error );
        let alert = this.alertCtrl.create({
        title: error.error_text,
        buttons: ['Tutup']
          });
        alert.present();
      }
    );
  }

  verificationCodeConfirm(){
    this.verifyCode = this.temporaryPasswordForm.value.verificationCode;
    let _requestData = {
      phoneNumber: this.phoneNumber,
      verifyRequestId: this.verifyRequestId,
      verifyCode: this.verifyCode
    }
    this.customerApi.verificationCodeConfirm(_requestData).subscribe(
      data =>{
        // data is accessToken
        console.log( data );
        this.resetPasswordToken = data;
        this.currentStep = 4;
        console.log( this.resetPasswordToken );
        let alert = this.alertCtrl.create({
        title: 'Kod verifikasi berjaya. Sila kemaskini kata laluan',
        buttons: ['Tutup']
          });
        alert.present();
      },
      error =>{
        console.log( error );
        let alert = this.alertCtrl.create({
        title: error.msg,
        buttons: ['Tutup']
          });
        alert.present();
      }
    );
  }

  changePassword(){
    console.log(this.changePasswordForm.value);
    let _password = this.changePasswordForm.value.password;

    this.loopbackAuth.setToken(this.resetPasswordToken);
    this.customerApi.setPassword(_password).subscribe( (response: any) =>{
      console.log(response);
      let alert = this.alertCtrl.create({
        title: 'Kata laluan berjaya dikemaskini. Sila log masuk untuk menggunakan K3M',
        buttons: ['Tutup']
          });
        alert.present();
        this.dismiss();
    },
    error =>{
      let alert = this.alertCtrl.create({
        title: error,
        buttons: ['Tutup']
          });
        alert.present();
    });
  }



}




import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if(password != confirmPassword) {
            console.log('false');
            AC.get('confirmPassword').setErrors( {MatchPassword: true} )
        } else {
            console.log('true');
            return null
        }
    }
}

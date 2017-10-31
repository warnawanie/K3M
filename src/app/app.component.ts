import { ForgotPassword } from './../pages/forgot-password/forgot-password';
import { Component, ViewChild } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { CuacaPage } from '../pages/cuaca/cuaca';
import { PasangPage } from '../pages/pasang/pasang';
import { PengumumanPage } from '../pages/pengumuman/pengumuman';
import { TalianPage } from '../pages/talian/talian';
import { AduanPage } from '../pages/aduan/aduan';
import { AduanV2Page } from '../pages/aduan/aduan-v2';
import { SosPage } from '../pages/sos/sos';
import { TentangPage } from '../pages/tentang/tentang';
import { SosialPage } from '../pages/sosial/sosial';
import { PrihatinPage } from '../pages/prihatin/prihatin';
import { AduanSendPage } from '../pages/aduan-send/aduan-send';
import { ContactPage } from '../pages/contact/contact';
import { LoopBackConfig} from './shared/sdk';
import { PengumumanDetailsPage } from '../pages/pengumuman-details/pengumuman-details';
import { FaqPage } from '../pages/faq/faq';
import { PrihatinSuccessPage } from '../pages/prihatin-success/prihatin-success';
import { EmergencySendPagePage } from '../pages/emergency-send-page/emergency-send-page';

import { MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CustomerApi } from './shared/sdk/services';
import { LoopBackAuth } from './shared/sdk/services/core/auth.service';
import { LoadingController  } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  loader: any;
  apiPath: any = "";

  titleUtama: string;
  titleProfile: string;
  titleTentang: string;
  titleFAQ: string;
  titleHubungi: string;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private translate: TranslateService, private accountApi: CustomerApi, private localStorage: Storage, private menuCtrl: MenuController, private loopbackAuth: LoopBackAuth, public loadingCtrl: LoadingController, private geolocation: Geolocation) {

    translate.setDefaultLang('ms');

    //  platform.ready().then(() => {
      //  StatusBar.styleDefault();
        //Splashscreen.hide();
     // });


    this.initializeApp();

    // used for an example of ngFor and navigation
    /*this.pages = [
      { title: 'Utama', component: HomePage },
      { title: 'Profil Saya', component: Page1 },
      { title: 'Tentang K3M', component: TentangPage},
      { title: 'FAQ', component: FaqPage},
      { title: 'Hubungi Kami', component: ContactPage }
    ];*/

    //set language and main menu
    this.listenChange();

    LoopBackConfig.setDebugMode(false); // defaults true
    //this.log.info('Component is Loaded');

    //LoopBackConfig.setBaseURL('https://staging.rakam.onsetfocus.com');         // Staging
    // LoopBackConfig.setBaseURL('http://localhost:3000');                // Development
     LoopBackConfig.setBaseURL('https://mobile.k3m.komunitimaritim.my');   // Production
    LoopBackConfig.setApiVersion('api');

    this.apiPath = LoopBackConfig.getPath();

  }

  translateText(){
    this.translate.get('UTAMA_BURGER').subscribe(
      value => {
        this.titleUtama = value;
      }
    )

    this.translate.get('PROFIL_SAYA_BURGER').subscribe(
      value => {
        this.titleProfile = value;
      }
    )

    this.translate.get('TENTANG_K3M_BURGER').subscribe(
      value => {
        this.titleTentang = value;
      }
    )

    this.translate.get('FAQ_BURGER').subscribe(
      value => {
        this.titleFAQ = value;
      }
    )

    this.translate.get('HUBUNGI_KAMI_BURGER').subscribe(
      value => {
        this.titleHubungi = value;
      }
    )
  }

  
  listenChange(){
    this.translateText();
    
    this.pages = [
      { title: this.titleUtama, component: HomePage },
      { title: this.titleProfile, component: Page1 },
      { title: this.titleTentang, component: TentangPage},
      { title: this.titleFAQ, component: FaqPage},
      { title: this.titleHubungi, component: ContactPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // StatusBar.styleDefault();
      //Splashscreen.hide();
      this.checkIfTokenExist();
    });
  }

  checkIfTokenExist(){
    this.loader = this.loadingCtrl.create({
      content: "Loading"
    });
    this.loader.present();

    this.localStorage.get('userToken').then((val) => {
       console.log('Token Exist', val);
       if(val != null){
         console.log('Token Details', val);
         this.loopbackAuth.setToken(val);
         // test to get user details
         this.accountApi.getCurrent().subscribe((response: any) => {
           console.log(response);
           this.nav.setRoot(HomePage);
           this.updateView();
         },
         error =>{
           // clear token
           this.localStorage.remove('userToken');
           this.updateView();
         });
       }else{
         this.updateView();
       }
      });
  }

  updateView(){
    //StatusBar.styleDefault();
    StatusBar.hide();
    Splashscreen.hide();
    this.loader.dismiss();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  /*
  - call user logout API
  - clear localstorage
  - redirect to login
  */
  initLogOut(){

    this.accountApi.logout().subscribe((response: any) => {
      console.log( response);
      this.localStorage.remove('userToken');
      this.nav.setRoot(this.rootPage);
      this.menuCtrl.close();
    });
  }
}

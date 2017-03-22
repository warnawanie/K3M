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
import { SosPage } from '../pages/sos/sos';
import { TentangPage } from '../pages/tentang/tentang';
import { SosialPage } from '../pages/sosial/sosial';
import { AduanSendPage } from '../pages/aduan-send/aduan-send';
import { ContactPage } from '../pages/contact/contact';
import { LoopBackConfig} from './shared/sdk';
import { PengumumanDetailsPage } from '../pages/pengumuman-details/pengumuman-details';
import { FaqPage } from '../pages/faq/faq';
import { EmergencySendPagePage } from '../pages/emergency-send-page/emergency-send-page';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, translate: TranslateService) {

      translate.setDefaultLang('ms');

    //  platform.ready().then(() => {
      //  StatusBar.styleDefault();
        //Splashscreen.hide();
     // });


    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Utama', component: HomePage },
     // { title: 'Profil Saya', component: Page1 },
      { title: 'Tentang K3M', component: TentangPage},
      { title: 'Hubungi Kami', component: ContactPage }
      
    ];

    LoopBackConfig.setDebugMode(false); // defaults true
    //this.log.info('Component is Loaded');

    LoopBackConfig.setBaseURL('https://rakam.onsetfocus.com');
    LoopBackConfig.setApiVersion('api');

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

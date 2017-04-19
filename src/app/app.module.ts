import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
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
import { FaqPage } from '../pages/faq/faq';
import { PrihatinSuccessPage } from '../pages/prihatin-success/prihatin-success';
import { PrihatinPage } from '../pages/prihatin/prihatin';
import { EmergencySendPagePage } from '../pages/emergency-send-page/emergency-send-page';
import { PengumumanService } from '../providers/pengumuman-service';
import { SDKBrowserModule } from './shared/sdk/index';
import { PengumumanDetailsPage } from '../pages/pengumuman-details/pengumuman-details';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';
import { LocationTracker } from '../providers/location-tracker';
import * as moment from 'moment';



export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    RegisterPage,
    HomePage,
    CuacaPage,
    PasangPage,
    PengumumanPage,
    TalianPage,
    AduanPage,
    SosPage,
    TentangPage,
    SosialPage,
    AduanSendPage,
    ContactPage,
    PengumumanDetailsPage,
    FaqPage,
    PrihatinPage,
    PrihatinSuccessPage,
    EmergencySendPagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SDKBrowserModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    RegisterPage,
    HomePage,
    CuacaPage,
    PasangPage,
    PengumumanPage,
    TalianPage,
    AduanPage,
    PrihatinSuccessPage,
    SosPage,
    TentangPage,
    SosialPage,
    AduanSendPage,
    ContactPage,
    PengumumanDetailsPage,
    FaqPage,
    PrihatinPage,
    EmergencySendPagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, LocationTracker, PengumumanService, Storage]
})
export class AppModule {}



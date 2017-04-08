import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FarmerInputPage } from '../pages/farmer-input/farmer-input';
import { ExporterInput} from '../pages/exporter-input/exporter-input';
import { FarmerContact } from '../pages/farmer-contact/farmer-contact';
import { FarmerDashboard } from '../pages/farmer-dashboard/farmer-dashboard';
import { ExporterContact } from '../pages/exporter-contact/exporter-contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FarmerInputPage,
    ExporterInput,
    FarmerContact,
    FarmerDashboard,
    ExporterContact
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FarmerInputPage,
    ExporterInput,
    FarmerContact,
    FarmerDashboard,
    ExporterContact
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// TODO: replace with wizard
import { ListPage } from '../list/list';
import { FarmerInputPage } from '../farmer-input/farmer-input';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navToFarmer(){
    // TODO: farm wizard
    this.navCtrl.push(FarmerInputPage)
  }
  navToExporter(){
    // TODO: switch to exporter wizard page
    this.navCtrl.push(ListPage)
  }


}

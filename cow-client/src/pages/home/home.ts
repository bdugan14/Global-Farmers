import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// TODO: replace with wizard
import { ListPage } from '../list/list';
import { FarmerInputPage } from '../farmer-input/farmer-input';
import { ExporterInput } from '../exporter-input/exporter-input';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navToFarmer(){
    this.navCtrl.push(FarmerInputPage);
  }
  navToExporter(){
    this.navCtrl.push(ExporterInput);
  }


}

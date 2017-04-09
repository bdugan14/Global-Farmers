import { Component } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';
import { ExporterContact } from '../exporter-contact/exporter-contact';
import { FarmerContact } from '../farmer-contact/farmer-contact';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  matches: Array<Object>;
  isExporter: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav) {
    let matches = navParams.get('matches');
    this.matches = matches;
    this.isExporter = navParams.get('isExporter');
  }

  itemTapped(event, item) {
    console.log(item); // Exporter Type
    // TODO: Got to message if ID is correct
    if(this.isExporter){
      this.nav.setRoot(FarmerContact)
    } else {
      this.nav.setRoot(ExporterContact);
    }
  }
}

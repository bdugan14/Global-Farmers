import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  matches: Array<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let matches = navParams.get('matches');
    this.matches = matches;
  }

  itemTapped(event, item) {
    console.log(item); // Exporter Type
    // TODO: Got to message if ID is correct
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { Exporter } from '../../models/exporter';
import { benchmarks } from '../farmer-input/farmer-input';

const exporters = [
  {
    name: 'Texico',
    region: 'Mexico',
    benchmarks
  }, {
    name: 'US Exporters',
    region: 'USA',
    benchmarks
  }
];

/**
 * Generated class for the FarmerDashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-farmer-dashboard',
  templateUrl: 'farmer-dashboard.html',
})
export class FarmerDashboard {
  matches: Array<Exporter>;
  priceRange: Object;
  potential: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {

    this.setupMatches();
    this.priceRange = {
      min: 5,
      max: 50
    };
    this.potential = {
      benchmarksRequired: 2,
      matches: 3,
      maxIncomeIncrease: 50
    };
  }

  setupMatches() {
    this.matches = exporters.map((exporter) => {
      return new Exporter(exporter.region, exporter.name, exporter.benchmarks);
    });

  }

  viewMatches() {
    this.navCtrl.push(ListPage, {
      matches: this.matches
    })
  }
}

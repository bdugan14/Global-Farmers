import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FarmerDashboard } from '../farmer-dashboard/farmer-dashboard';
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
let reqBuilder = function(item){
  return {
    requirement: item
  }
}
/**
 * Generated class for the ExporterInput page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-exporter-input',
  templateUrl: 'exporter-input.html',
})
export class ExporterInput {
  protocols: any;
  countries: any;
  breeds: any;
  matches: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExporterInput');
  }

  goToDashboard() {
    this.navCtrl.setRoot(FarmerDashboard);
  }

  ngOnInit(){
    this.getProtocols();
    this.getCountries();
  }

  getProtocols(){
    this.protocols = [
      'SAI',
      'USDA',
      'SAN',
      'PRODUZINDO CERTO',
      'GSRB'
    ].map(reqBuilder)
    console.log(this.protocols)
  }

  getCountries(){
    this.countries = [
      "United States",
      "Canada",
      "China",
      "Colombia",
      "Belgium",
      "Brazil",
      "New Zealand",
      "Australia",
      "Botswana",
      "Ethiopia",
      "Japan",
      "Italy",
      "Thailand",
      "France"
    ]
  }

  viewMatches() {
    this.navCtrl.push(ListPage, {
      matches: this.matches,
      isExporter: false
    })
  }
  setupMatches() {
    this.matches = exporters.map((exporter) => {
      return new Exporter(exporter.region, exporter.name, exporter.benchmarks);
    });

  }
}

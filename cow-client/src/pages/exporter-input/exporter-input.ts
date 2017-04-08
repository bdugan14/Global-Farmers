import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExporterInput');
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
}

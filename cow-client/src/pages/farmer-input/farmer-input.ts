import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FarmerDashboard } from '../farmer-dashboard/farmer-dashboard';

export const benchmarks = [{
    requirement: "Your farm has no history of Anthrax, Anjeszsky’s Disease, Tuberculosis, Trichinosis for the past 12 months?"
  },
  {
    requirement: "No restrictions or quarantine for your area?"
  },
  {
    requirement: "Any Antibiotics used? (In the last 30 days?)"
  },
  {
    requirement: "Free Range?"
  },
  {
    requirement: "Grass feed"
  },
  {
    requirement: "Corn feed."
  },
  {
    requirement: "Hormones?"
  },
  {
    requirement: "Deforastation Free"
  },
  {
    requirement: "Forced Labor Free"
  },
  {
    requirement: "Indigenous Land Free"
  }
  ,
  {
    requirement: "No Protected Areas"
  }
  ,
  {
    requirement: "No Embargo"
  }];

@Component({
  selector: 'farmer-input',
  templateUrl: 'farmer-input.html'
})
export class FarmerInputPage {

  protocols: any;
  countries: any;
  breeds: any;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    this.getProtocols();
    this.getCountries();
    this.getBreeds();
  };

  getProtocols(){
    this.protocols = benchmarks;
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

  getBreeds(){
    this.breeds = [
      "Aberdeen Angus",
      "Belted Galloway",
      "Brahman",
      "Charolais",
      "Dexter",
      "Gelbvieh",
      "Hereford",
      "Holstein",
      "Limousin",
      "Piedmontese",
      "Red Angus",
      "Scottish Highland",
      "Shorthorn",
      "Simmental",
      "Texas Longhorn",
      "Watusi"
    ]
  }

  goToDashboard() {
    this.navCtrl.setRoot(FarmerDashboard);
  }
}

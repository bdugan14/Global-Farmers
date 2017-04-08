import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'farmer-input',
  templateUrl: 'farmer-input.html'
})
export class FarmerInputPage {

  protocols: any;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    this.getProtocols();
  };

  getProtocols(){
    this.protocols = [
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
      }
    ]

    ;
}


}

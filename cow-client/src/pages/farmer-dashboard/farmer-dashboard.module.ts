import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FarmerDashboard } from './farmer-dashboard';

@NgModule({
  declarations: [
    FarmerDashboard,
  ],
  imports: [
    IonicPageModule.forChild(FarmerDashboard),
  ],
  exports: [
    FarmerDashboard
  ]
})
export class FarmerDashboardModule {}

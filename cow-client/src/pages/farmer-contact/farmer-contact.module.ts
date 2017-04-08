import { NgModule } from '@angular/core';
import { IonicPageModule  } from 'ionic-angular';
import { FarmerContact } from './farmer-contact';

@NgModule({
  declarations: [
    FarmerContact,
  ],
  imports: [
    IonicPageModule.forChild(FarmerContact),
  ],
  exports: [
    FarmerContact
  ]
})
export class FarmerContactModule {}

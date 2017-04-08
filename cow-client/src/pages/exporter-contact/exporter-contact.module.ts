import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExporterContact } from './exporter-contact';

@NgModule({
  declarations: [
    ExporterContact,
  ],
  imports: [
    IonicPageModule.forChild(ExporterContact),
  ],
  exports: [
    ExporterContact
  ]
})
export class ExporterContactModule {}

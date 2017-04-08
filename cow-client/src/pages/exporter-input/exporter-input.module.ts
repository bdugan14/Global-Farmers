import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExporterInput } from './exporter-input';

@NgModule({
  declarations: [
    ExporterInput,
  ],
  imports: [
    IonicPageModule.forChild(ExporterInput),
  ],
  exports: [
    ExporterInput
  ]
})
export class ExporterInputModule {}

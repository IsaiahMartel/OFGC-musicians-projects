import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadSingleProjectPdfPageRoutingModule } from './download-single-project-pdf-routing.module';

import { DownloadSingleProjectPdfPage } from './download-single-project-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadSingleProjectPdfPageRoutingModule
  ],
  declarations: [DownloadSingleProjectPdfPage]
})
export class DownloadSingleProjectPdfPageModule {}

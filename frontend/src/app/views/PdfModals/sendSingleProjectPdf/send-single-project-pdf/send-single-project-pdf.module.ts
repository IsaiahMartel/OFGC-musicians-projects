import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendSingleProjectPdfPageRoutingModule } from './send-single-project-pdf-routing.module';

import { SendSingleProjectPdfPage } from './send-single-project-pdf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendSingleProjectPdfPageRoutingModule
  ],
  declarations: [SendSingleProjectPdfPage]
})
export class SendSingleProjectPdfPageModule {}

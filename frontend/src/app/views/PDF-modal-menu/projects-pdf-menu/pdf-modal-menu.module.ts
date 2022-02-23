import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PDFModalMenuPageRoutingModule } from './pdf-modal-menu-routing.module';

import { PDFModalMenuPage } from './pdf-modal-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PDFModalMenuPageRoutingModule
  ],
  declarations: [PDFModalMenuPage]
})
export class PDFModalMenuPageModule {}

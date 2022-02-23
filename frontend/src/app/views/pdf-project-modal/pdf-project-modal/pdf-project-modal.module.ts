import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfProjectModalPageRoutingModule } from './pdf-project-modal-routing.module';

import { PdfProjectModalPage } from './pdf-project-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfProjectModalPageRoutingModule
  ],
  declarations: [PdfProjectModalPage]
})
export class PdfProjectModalPageModule {}

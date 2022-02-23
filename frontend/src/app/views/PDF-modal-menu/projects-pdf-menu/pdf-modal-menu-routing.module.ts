import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PDFModalMenuPage } from './pdf-modal-menu.page';

const routes: Routes = [
  {
    path: '',
    component: PDFModalMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PDFModalMenuPageRoutingModule {}

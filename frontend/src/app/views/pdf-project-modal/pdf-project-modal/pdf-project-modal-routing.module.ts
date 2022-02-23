import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfProjectModalPage } from './pdf-project-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PdfProjectModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfProjectModalPageRoutingModule {}

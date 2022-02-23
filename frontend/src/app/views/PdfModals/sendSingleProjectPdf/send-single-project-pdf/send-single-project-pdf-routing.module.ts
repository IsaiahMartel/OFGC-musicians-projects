import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendSingleProjectPdfPage } from './send-single-project-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: SendSingleProjectPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendSingleProjectPdfPageRoutingModule {}

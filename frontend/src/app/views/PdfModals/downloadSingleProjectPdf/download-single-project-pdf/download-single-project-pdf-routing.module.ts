import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadSingleProjectPdfPage } from './download-single-project-pdf.page';

const routes: Routes = [
  {
    path: '',
    component: DownloadSingleProjectPdfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloadSingleProjectPdfPageRoutingModule {}

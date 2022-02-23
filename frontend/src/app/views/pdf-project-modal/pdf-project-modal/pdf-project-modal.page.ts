import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SendSingleProjectPdfPage } from '../../PdfModals/sendSingleProjectPdf/send-single-project-pdf/send-single-project-pdf.page';
import { DownloadSingleProjectPdfPage } from '../../PdfModals/downloadSingleProjectPdf/download-single-project-pdf/download-single-project-pdf.page';
import { PDFModalMenuPage } from '../../PDF-modal-menu/projects-pdf-menu/pdf-modal-menu.page';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-pdf-project-modal',
  templateUrl: './pdf-project-modal.page.html',
  styleUrls: ['./pdf-project-modal.page.scss'],
})
export class PdfProjectModalPage implements OnInit {

  constructor(private modalController: ModalController, private pdfService: PdfService) { }

  private modalOpen: boolean = false;
  ngOnInit() {

  }

  async openModal() {

    const modal = await this.modalController.create({
      component: PDFModalMenuPage,
      handle: false,
      initialBreakpoint: 0.16,
      breakpoints: [0, 0.16],
    });

    modal.onDidDismiss().then((o) => { this.modalOpen = false })

    if (!this.modalOpen) {
      this.modalOpen = true;



      return await modal.present();


    }





    // async openModalDownloadAndOpenPdf() {
    //   this.modalController.dismiss();
    //   const modal = await this.modalController.create({
    //     component: DownloadSingleProjectPdfPage,
    //     handle: false,


    //   });
    //   return await modal.present();
    // }

    // async openModalSendPdf() {
    //   this.modalController.dismiss();
    //   const modal = await this.modalController.create({
    //     component: DownloadSingleProjectPdfPage,
    //     handle: false,


    //   });
    //   return await modal.present();
    // }



  }

  category(category){
  this.pdfService.category = category;
  }

}

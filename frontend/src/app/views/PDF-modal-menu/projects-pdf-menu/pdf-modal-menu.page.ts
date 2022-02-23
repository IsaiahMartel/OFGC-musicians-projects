import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-pdf-modal-menu',
  templateUrl: './pdf-modal-menu.page.html',
  styleUrls: ['./pdf-modal-menu.page.scss'],
})
export class PDFModalMenuPage implements OnInit {


  constructor(private modalController: ModalController, private pdfService: PdfService,) { }

  ngOnInit() {
  
  }

  downloadOrSend(option){
    this.pdfService.downloadOrSend = option;
    this.pdfService.getOptions();
  }

  // setCategoryModal(option) {
  //   this.pdfModalOptionsSerivce.category = option
  //   this.pdfModalOptionsSerivce.getOptions();
  // }



  

 

}

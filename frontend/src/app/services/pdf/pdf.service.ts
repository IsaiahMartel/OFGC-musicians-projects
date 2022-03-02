import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Storage } from '@ionic/storage';

import { LocalStorageService } from '../local-storage/local-storage.service';

import { Browser } from '@capacitor/browser';



import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  downloadOrSend: number;
  category: number;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${""}`
    })
  }
  // const requestHeaders;




  sendProjects: string = "http://localhost:8000/api/projects/sendPDF";
  downloadProjects: string = "http://localhost:8000/api/projects/downloadPDF";

  downloadEventsByIdProject: string = "http://localhost:8000/api/schedule/downloadPDF/";
  sendEventsByIdProject: string = "http://localhost:8000/api/schedule/sendPDF";

  constructor(private httpClient: HttpClient, private storage: Storage, private localStorageService: LocalStorageService) {

  }

  async getHttpOptions() {
    await this.localStorageService.getToken().then(o => {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${o}`
        })

      };

      ;
    });


  }

  getOptions() {
    if (this.downloadOrSend == 0) {
      this.downloadAndOpenPdf();
    } else if (this.downloadOrSend == 1) {
      this.sendPdfToEmail();
    };
  }

  downloadAndOpenPdf() {
    console.log("download and open")
    console.log(this.category, " ", this.downloadOrSend)
    switch (this.category) {

      case 0:
       
        this.getProjectsPDF();

        break;
      case 1:
        break;
    }
  }

  sendPdfToEmail() {
    console.log("email")
    console.log(this.category)
    switch (this.category) {
      case 0:

        
        this.sendProjectsPDF().then(o => {
          o.subscribe()


        });
        break;
      case 1:
        console.log("opcion 2 email");
        break;
    }

  }




  async sendProjectsPDF() {
    await this.getHttpOptions();
    console.log(this.httpOptions);
    return await this.httpClient.get(this.sendProjects, this.httpOptions);
  }
  async getProjectsPDF() {

    // await console.log(this.httpClient.get(this.downloadProjects))
    // return await this.httpClient.get(this.downloadProjects, httpOptions);
    // Browser.open({ url: this.downloadProjects });

    // fetch("http://localhost:8000/api/projects/downloadPDF", {
    //   method: 'GET',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': this.httpOptions.headers.get('Authorization')
    //   }



    // }).then(response => response.json());

    // console.log(this.httpOptions.headers.keys())
    // console.log(this.httpOptions.headers.get('Content-Type'));
  }

  async sendEventsPDF(projectId) {
    await this.getHttpOptions();

    return await this.httpClient.get(this.sendEventsByIdProject + projectId, this.httpOptions);
  }




}



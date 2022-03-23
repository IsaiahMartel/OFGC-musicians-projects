import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private alertController: AlertController,
    private storage: Storage) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.storage.get("access_token")}`
    });

    const reqClone = req.clone({
      headers
    })

    return next.handle(reqClone);
    //return next.handle(req);

  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: message,
      message: 'Inténtalo de nuevo.',
      buttons: ['OK']
    });
    await alert.present();
  }

  manageError(error: HttpErrorResponse) {

    let errorJSON = error.error
    let errorMessage = ""
    Object.values(errorJSON).forEach(element => errorMessage += element + "\n");
    this.presentAlert(errorMessage);

  }

}

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { map } from 'rxjs/operators';

const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  
  constructor(
    private alertController: AlertController,
    private storage: Storage,
    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.storage.ready().then(() => this.storage.get('access_token'))}`
    });

   

    const reqClone = req.clone({
      headers
    })

    // return next.handle(reqClone);

    return from(this.storage.get(TOKEN_KEY))
      .pipe(
        switchMap(token => {
          if (token) {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
          }

          if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
          }


          return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                // do nothing for now
              }
              return event;
            }),
            
          );
        })
      );
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user/user';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Validators, FormControl, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController,
    private formBuilder: FormBuilder) { }
    public menuCtrl: MenuController

  ngOnInit() {
 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])],
    },

    );



  }




  login() {
    let user: User = {
      id: null,
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      name: null,
      isAdmin: null
    };

    this.authService.login(user).subscribe((res) => {
      if (!res.access_token) {
        this.presentAlert("invalid credentials");
        return;
      }

      this.router.navigateByUrl('/home');

      this.loginForm.reset();

    }, 
    (error) => {
      let errorJSON = JSON.parse(error.error)
      let errorMessage = ""
      Object.values(errorJSON).forEach(element => errorMessage += element + "\n");
      console.log(errorMessage);

      this.presentAlert(errorMessage);
    });
    
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: message,
      message: 'Could not login. Try again.',
      buttons: ['OK']
    });

    await alert.present();
  }
}








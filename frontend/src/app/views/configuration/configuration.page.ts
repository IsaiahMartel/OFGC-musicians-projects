import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {
darkMode: boolean = true;
  constructor() {
  }
  ngOnInit() {
  }
  

  enableDarkMode(){
    document.body.classList.toggle('dark')
  }
}

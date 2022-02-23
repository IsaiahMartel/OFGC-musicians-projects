import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'tests.page',
  templateUrl: 'tests.page.html',
  styleUrls: ['./tests.page.scss'],
})
export class TestsPage {

constructor(private menu: MenuController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
    console.log("a");
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
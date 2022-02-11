import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from '../../models/projects';
import { ProjectsService } from '../../services/projects.service';
import { Browser } from '@capacitor/browser';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { GestureController, MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PdfProjectModalPage } from '../pdf-project-modal/pdf-project-modal/pdf-project-modal.page';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements AfterViewInit {
  @ViewChild('holdBtn', { read: ElementRef }) holdBtn: ElementRef;
  hold = 0;
  longPressActive = false;
  menuController: MenuController;
 

  public projectsArray: Array<Projects> = [];
  public projects: Projects;






  constructor( private router: Router, private projectsService: ProjectsService, private pdfService: PdfService, private gestureCtrl: GestureController, private modalController: ModalController) { }

  ngOnInit(): void {
    this.loadInfo();
    
  }

  ngAfterViewInit() {
    console.log(this.holdBtn)
    const longPress = this.gestureCtrl.create({
      el: this.holdBtn.nativeElement,
      threshold: 0,
      gestureName: 'long-press',
      onStart: ev => {
        this.longPressActive = true;
        this.increase();

      },
      onEnd: ev => {
        this.longPressActive = false;

      }
    }, true); // Passing true will run the gesture callback inside of NgZone!

    // Don't forget to enable!
    longPress.enable(true);

  }

  increase(timeout = 200) {
    setTimeout(() => {
      if (this.longPressActive) {
        this.hold++;

        this.increase(timeout);

      }
    }, timeout);
    if (this.hold == 4) {
      this.openModal();
      this.hold = 0;
    }
  }

 

  async openModal() {
    const modal = await this.modalController.create({
      component: PdfProjectModalPage,
      handle: false,
  

    });
    return await modal.present();
  }



  loadInfo() {
    
    this.projectsService.getProjects().then(o => {
      o.subscribe((p: Array<Projects>) => {
        this.projectsArray = p.filter((project) => {
          return project.published == true;
        })
        // for (let project of p) {
        //   if (project.published == true) {
        //     this.projectsArray.push(project);
        //   }
        // }
      })
    })

  }


}


















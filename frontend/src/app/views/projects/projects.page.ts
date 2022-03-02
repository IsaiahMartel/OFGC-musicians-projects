import { AfterViewInit, Component, ElementRef, ViewChild, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Projects } from '../../models/projects';
import { ProjectsService } from '../../services/projects.service';
import { Browser } from '@capacitor/browser';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { GestureController, MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PdfProjectModalPage } from '../pdf-project-modal/pdf-project-modal/pdf-project-modal.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements AfterViewInit {
  @ViewChildren('holdBtn', { read: ElementRef }) holdBtnArray: QueryList<ElementRef>;
  hold = 0;
  modalId :number;
  
  longPressActive = false;
  menuController: MenuController;
  private modalOpen: boolean = false;

  public projectsArray: Array<Projects> = [];
  public projects: Projects;
  projectId : number;





  constructor(private activatedRoute: ActivatedRoute, private router: Router, private projectsService: ProjectsService, private pdfService: PdfService, private gestureCtrl: GestureController, private modalController: ModalController, private alertController: AlertController) { }

  ngOnInit(): void {


  }

  async ngAfterViewInit() {
    await this.loadInfo();

    this.holdBtnArray.changes
      .subscribe(() => this.holdBtnArray.forEach((holdBtn: ElementRef) => {
        if (holdBtn != null) {
       this.projectId = holdBtn.nativeElement.getAttribute("ng-reflect-router-link").split("/").pop()
          const longPress = this.gestureCtrl.create({
            el: holdBtn.nativeElement,
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
      })
      );


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

    }
  }


  async openModal() {


    const modal = await this.modalController.create({
      component: PdfProjectModalPage,
      handle: false,
      initialBreakpoint: 0.22,
      breakpoints: [0, 0.22],
    });

    modal.onDidDismiss().then((o) => { this.modalOpen = false })

    if (!this.modalOpen) {
      this.modalOpen = true;



      return await modal.present();


    }


    //  await modal.onWillDismiss().then((o) => { console.log(o) })
  }




  loadInfo() {

    this.projectsService.getProjects().then(o => {
      o.subscribe((p: Array<Projects>) => {

        this.projectsArray = p.filter((project) => {


          return project.published == true;
        }
        )

      }, (error) => {
        let errorJSON = error.error
        let errorMessage = ""
        Object.values(errorJSON).forEach(element => errorMessage += element + "\n");



        this.presentAlert(errorMessage);
      })
    }

    )

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



}

















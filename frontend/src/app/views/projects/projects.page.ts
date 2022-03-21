import { AfterViewInit, Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Projects } from '../../models/projects';
import { ProjectsService } from '../../services/projects/projects.service';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { GestureController, MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { EventsOrWorksModal } from './reports/events-or-works-modal/events-or-works-modal.page';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements AfterViewInit {
  @ViewChildren('holdBtn', { read: ElementRef }) holdBtnArray: QueryList<ElementRef>;
  hold = 0;
  modalId: number;

  longPressActive = false;
  menuController: MenuController;
  private modalOpen: boolean = false;

  public projectsArray: Array<Projects> = [];
  public projects: Projects;
  projectId: number;

  constructor(
    private projectsService: ProjectsService,
    private pdfService: PdfService,
    private gestureCtrl: GestureController,
    private modalController: ModalController,
    private alertController: AlertController,
    public storage: Storage
  ) { }

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
          }, true);
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
      this.hold = 0;
      this.pdfService.projectId = this.projectId;
    }
  }


  async openModal() {
    const modal = await this.modalController.create({
      component: EventsOrWorksModal,
      handle: false,
      initialBreakpoint: 0.22,
      breakpoints: [0, 0.22],
    });

    modal.onDidDismiss().then((o) => { this.modalOpen = false })

    if (!this.modalOpen) {
      this.modalOpen = true;
      return await modal.present();
    }
  }

  loadInfo() {
    if(navigator.onLine){      
      this.projectsService.getProjects().then(o => {
        o.subscribe((p: Array<Projects>) => {

          //save storage
          this.storage.set("projects", JSON.stringify(p));

          this.projectsArray = p.filter((project) => {
            return project.published == true;
          })
        }, (error) => {
          let errorJSON = error.error
          let errorMessage = ""
          Object.values(errorJSON).forEach(element => errorMessage += element + "\n");
          this.presentAlert(errorMessage);
        })
      })
    } else{
      this.storage.get("projects").then((p) => {
        this.projectsArray = JSON.parse(p);
      })
    }
    
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
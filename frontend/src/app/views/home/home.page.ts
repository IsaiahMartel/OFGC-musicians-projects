import { Component } from '@angular/core';
import { Schedule } from '../../models/schedule';
import { SchedulesService } from '../../services/schedule/schedule.service';
import { Projects } from '../../models/projects';
import { ProjectsService } from '../../services/projects/projects.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public schedule: Schedule;
  public projects_id: number[] = [];
  public projects: Projects;
  public scheduleArray: Schedule[] = [];
  public projectsArray: Projects[] = [];

  constructor(
    private projectsService: ProjectsService,
    private scheduleService: SchedulesService, 
    private alertController: AlertController,
    public storage: Storage
    ) { }

  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {

    if (navigator.onLine) {

    this.projectsService.getProjects().then(o => {
      o.subscribe((p: Array<Projects>) => {
        this.storage.set("project", JSON.stringify(p));

        this.projectsArray = p.filter((project) => {
          project.published == true;
          this.projects_id.push(project.id);
          this.getSchedules();
        })

      }, (error) => {
        let errorJSON = error.error
        let errorMessage = ""
        Object.values(errorJSON).forEach(element => errorMessage += element + "\n");



        this.presentAlert(errorMessage);
      })
    })

  }else {
    this.storage.get("project").then((s) => {
      this.projectsArray = JSON.parse(s);
    })
  }


  }

  getSchedules() {
    for (let i of this.projects_id) {
      this.scheduleService.getSchedulesByProjectId(i).then(o => {
        o.subscribe((s: Array<Schedule>) => {
          this.scheduleArray = s;
        });
      });
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

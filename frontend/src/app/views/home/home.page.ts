import { Component } from '@angular/core';
import { Schedule } from '../../models/schedule';
import { SchedulesService } from '../../services/schedule/schedule.service';
import { Projects } from '../../models/projects';
import { ProjectsService } from '../../services/projects/projects.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Echo } from 'laravel-echo-ionic';

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

    this.storage.get("schedulesHome").then(data => {

      if (data) {

        this.scheduleArray = JSON.parse(data);

      }

      else {
        this.projectsService.getProjects().subscribe((p: Array<Projects>) => {
          this.storage.set("project", JSON.stringify(p));

          this.projectsArray = p.filter((project) => {
            if (project.published == true) {
              this.projects_id.push(project.id);
            }

          })
          this.updateData();
        })

      }
    })
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


  doConnection() {
    const echo = new Echo({
      broadcaster: 'pusher',
      key: 'local',
      wsHost: 'localhost',
      wsPort: 6001,
      forceTLS: false,
      disableStats: true
    });

    const channel = echo.channel('channel');
    channel.listen('Alert', (data) => {
      console.log(JSON.stringify(data));
      this.notification(data);
      this.updateData();
    });
  }

  updateData() {

    for (let i of this.projects_id) {
      this.scheduleService.getSchedulesByProjectId(i).subscribe((s: Array<Schedule>) => {
        for (let j of s) {
          this.storage.set("schedulesHome", JSON.stringify(s));
          this.scheduleArray.push(j);
        }
      });
    }

  }


  async notification(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Se han realizado cambios',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}

import { Component } from '@angular/core';
import { Schedule } from '../../models/schedule';
import { SchedulesService } from '../../services/schedule/schedule.service';
import { Projects } from '../../models/projects';
import { ProjectsService } from '../../services/projects/projects.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Echo } from 'laravel-echo-ionic';
import { PlaylistsService } from 'src/app/services/playlists/playlists.service';
import { DirectorProjectsService } from 'src/app/services/director-projects/director-projects.service';
import { SoloistProjects } from 'src/app/models/soloist-projects';
import { SoloistProjectsService } from 'src/app/services/soloist/soloist-projects.service';
import { Playlists } from 'src/app/models/playlists/playlists';
import { DirectorProjects } from 'src/app/models/director-projects';

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
  public playlistArray: Array<Playlists> = [];
  public directorProjectArray: Array<DirectorProjects> = [];
  public soloistProjectArray: Array<SoloistProjects> = [];

  constructor(
    private projectsService: ProjectsService,
    private scheduleService: SchedulesService,
    private playlistService: PlaylistsService,
    private directorProjectService: DirectorProjectsService,
    private soloistProjectService: SoloistProjectsService,


    private alertController: AlertController,
    public storage: Storage,
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

      this.playlistService.getPlaylistProjectsByProjectId(i).then(o => {
        o.subscribe((s: Array<Playlists>) => {
          for (let j of s) {
          this.storage.set("playlistProject", JSON.stringify(s));
          this.playlistArray.push(j);
     
        }
        }
        )
      })

      this.directorProjectService.getDirectorProjectsByProjectId(i).subscribe((s: Array<DirectorProjects>) => {
        for (let j of s) {
        this.storage.set("directorProject", JSON.stringify(s));
        this.directorProjectArray.push(j);
      }
      })

      this.soloistProjectService.getSoloistProjectsByProjectId(i).subscribe((s: Array<SoloistProjects>) => {
        for (let j of s) {
        this.storage.set("soloistProject", JSON.stringify(s));
        this.soloistProjectArray.push(j);

      }
      })

      this.scheduleService.getSchedulesByProjectId(i).subscribe((s: Array<Schedule>) => {
        for (let j of s) {
        this.storage.set("scheduleProject", JSON.stringify(s));
        this.scheduleArray.push(j);
      }
      })
    }

    this.projectsService.getProjects().subscribe((p: Array<Projects>) => {
      this.storage.set("projects", JSON.stringify(p));
      this.projectsArray = p.filter((project) => {
        return project.published == true;
      })
    })

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

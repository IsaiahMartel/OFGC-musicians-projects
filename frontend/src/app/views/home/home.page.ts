import { Component, Inject, LOCALE_ID, ViewChild } from '@angular/core';
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
import { CalendarComponent } from 'ionic2-calendar';

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
  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(
    private projectsService: ProjectsService,
    private scheduleService: SchedulesService,
    private playlistService: PlaylistsService,
    private directorProjectService: DirectorProjectsService,
    private soloistProjectService: SoloistProjectsService,


    private alertController: AlertController,
    public storage: Storage,
    @Inject(LOCALE_ID) private locale: string,
  ) { }

  ngOnInit(): void {
    this.loadInfo();
    this.projectsService.getProjects().subscribe((p: Array<Projects>) => {
      this.storage.set("projects", JSON.stringify(p));

      this.projectsArray = p.filter((project) => {
        if (project.published == true) {
          this.projects_id.push(project.id);
        }

      })
    })
    this.updateData();

  }

  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }


  createEvents() {
    var events = [];
    console.log(this.scheduleArray);
    for (let p of this.scheduleArray) {
      console.log(p);

      var startDate = new Date(p.date);
      var hourRange = p.hourRange
      console.log(p.hourRange);

      var title = p.note;


      events.push({
        title: title,
        startTime: startDate,

        allDay: true
      });
    }

    this.eventSource = events;


  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  loadInfo() {

    this.storage.get("projects").then(data => {

      if (data) {
        this.projectsArray = JSON.parse(data);
        this.createEvents();
      }

      else {
        this.updateData();
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
      this.storage.set("schedules", JSON.stringify(p));
      this.projectsArray = p.filter((project) => {
        return project.published == true;
      })
      this.createEvents();
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

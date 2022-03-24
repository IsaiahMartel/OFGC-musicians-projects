
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Schedule } from '../../../../models/schedule';
import { SchedulesService } from '../../../../services/schedule/schedule.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  public scheduleArray: Array<Schedule> = [];
  public schedule: Schedule;
  project_id = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(
    private scheduleService: SchedulesService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    public storage: Storage

  ) { }


  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {
    if (navigator.onLine) {
      this.scheduleService.getSchedulesByProjectId(this.project_id).subscribe((s: Array<Schedule>) => {
        this.storage.set("sheduleId", JSON.stringify(s));
        this.scheduleArray = s;
      }, (error) => {
        let errorJSON = error.error
        let errorMessage = ""
        Object.values(errorJSON).forEach(element => errorMessage += element + "\n");
        this.presentAlert(errorMessage);
      })

    } else {
      this.storage.get("sheduleId").then((s) => {
        this.scheduleArray = JSON.parse(s);
      })
    }


  }

  deleteSchedule(idSchedule: number) {
    this.scheduleService.deleteSchedule(idSchedule).subscribe(() => {
      this.loadInfo();
    });
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
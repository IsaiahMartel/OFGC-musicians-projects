
import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import { Schedule } from '../../models/schedule';
import { SchedulesService } from '../../services/schedule.service';




@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  public scheduleArray: Array<Schedule> = [];
  public schedule: Schedule;
  project_id = this.activatedRoute.snapshot.paramMap.get('id');
  
 

  constructor(private router: Router, private scheduleService: SchedulesService, private activatedRoute: ActivatedRoute,
  ) {}

  
  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo(){
    this.scheduleService.getSchedulesByProjectId(this.project_id).then(o=>{o.subscribe((s: Array<Schedule>) => {
      this.scheduleArray = s;
    })
  })
  }



  deleteSchedule(idSchedule: number){
    this.scheduleService.deleteSchedule(idSchedule).then(o=>{o.subscribe(() => {
      this.loadInfo();
    });
  });
  }




}
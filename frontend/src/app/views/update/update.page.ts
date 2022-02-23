import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SchedulesService } from '../../services/schedule.service';
import { Schedule } from '../../models/schedule';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {
  public scheduleArray: Array<Schedule> = [];
  id: any;

  updateForm: FormGroup;



  constructor(
    private scheduleCrudService: SchedulesService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router,
    private _location: Location
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchSchedule(this.id);
    this.updateForm = this.formBuilder.group({
      project_id: [''],
      type_schedules_id: [''],
      rooms_id: [''],
      date: [''],
      hourRange: [''],
      note: ['']
    })
  }

  fetchSchedule(id) {
    this.scheduleCrudService.getScheduleById(id).then(o => {
      o.subscribe((data) => {
        this.updateForm.setValue({
          project_id: data[0]["project_id"],
          type_schedules_id: data[0]['type_schedules_id'],
          rooms_id: data[0]['rooms_id'],
          date: data[0]['date'],
          hourRange: data[0]['hourRange'],
          note: data[0]['note']
        });
      });
    });
  }

  loadInfo() {
    this.scheduleCrudService.getSchedules().then(o => {
      o.subscribe((s: Array<Schedule>) => {
        this.scheduleArray = s;
      })
    })
  }


  onSubmit() {
    if (!this.updateForm.valid) {
      return false;
    } else {

      this.scheduleCrudService.updateSchedule(this.id, this.updateForm.value).then(o => {
        o.subscribe(() => {

          this.updateForm.reset();

          this._location.back();

        });



      });





    }




  }
}
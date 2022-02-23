import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SchedulesService } from '../../services/schedule.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  project_id = this.activatedRoute.snapshot.paramMap.get('id');
  createForm = this.formBuilder.group({
    project_id: '',
    type_schedules_id: '',
    rooms_id: '',
    date: '',
    hourRange: '',
    note: ''
  });

  constructor(private router: Router, private formBuilder: FormBuilder,
    private scheduleService: SchedulesService, private activatedRoute: ActivatedRoute,
    private _location: Location) { }

  ngOnInit() {

  }


  onSubmit(): void {
    this.scheduleService.createSchedule(this.createForm.value).then(o=>{o.subscribe(() => {

      this.createForm.reset();

      this._location.back();

    });
  })
}
}

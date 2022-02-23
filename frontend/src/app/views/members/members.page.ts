import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DirectorProjects } from '../../models/director-projects';
import { DirectorProjectsService } from '../../services/director-projects.service';
import { SoloistProjects } from '../../models/soloist-projects';
import { SoloistProjectsService } from '../../services/soloists-projects/soloist-projects.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  public directorProjectArray: Array<DirectorProjects> = [];
  project_id = this.activatedRoute.snapshot.paramMap.get('id');


  public soloistProjectArray: Array<SoloistProjects> = [];



  constructor(private router: Router, private directorProjectService: DirectorProjectsService, private activatedRoute: ActivatedRoute,
    private soloistProjectService: SoloistProjectsService) { }


  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {

    this.directorProjectService.getDirectorProjectsByProjectId(this.project_id).then(o => {
      o.subscribe((s: Array<DirectorProjects>) => {
        this.directorProjectArray = s;

      })
    })

    this.soloistProjectService.getSoloistProjectsByProjectId(this.project_id).then(o => {
      o.subscribe((s: Array<SoloistProjects>) => {
        this.soloistProjectArray = s;

      })
    })

  }









}
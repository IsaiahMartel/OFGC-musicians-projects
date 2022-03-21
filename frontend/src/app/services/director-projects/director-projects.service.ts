import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DirectorProjects } from 'src/app/models/director-projects';
import { Storage } from '@ionic/storage';

import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})


export class DirectorProjectsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${""}`
    })
  }

  endpoint: string = "http://localhost:8000/api/director-projects";

  constructor(private httpClient: HttpClient, private storage: Storage, private localStorageService: LocalStorageService) {

  }

  async getHttpOptions() {
    await this.localStorageService.getToken().then(o => {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${o}`
        })
      }
    });
  }


  async getDirectorProjectsByProjectId(projectId) {
    await this.getHttpOptions();
    return await this.httpClient.get<DirectorProjects[]>(this.endpoint + "/projects/" + projectId, this.httpOptions)
  }
}



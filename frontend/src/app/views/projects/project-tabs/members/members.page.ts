import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DirectorProjects } from '../../../../models/director-projects';
import { DirectorProjectsService } from 'src/app/services/director-projects/director-projects.service';
import { SoloistProjects } from '../../../../models/soloist-projects';
import { SoloistProjectsService } from 'src/app/services/soloist/soloist-projects.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  public directorProjectArray: Array<DirectorProjects> = [];
  project_id = this.activatedRoute.snapshot.paramMap.get('id');


  public soloistProjectArray: Array<SoloistProjects> = [];

  constructor(
    private directorProjectService: DirectorProjectsService,
    private activatedRoute: ActivatedRoute,
    private soloistProjectService: SoloistProjectsService,
    private alertController: AlertController,
    public storage: Storage

    ) { }


  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {

    if (navigator.onLine) {
      this.directorProjectService.getDirectorProjectsByProjectId(this.project_id).then(o => {
        o.subscribe((s: Array<DirectorProjects>) => {
          this.storage.set("directorProject", JSON.stringify(s));
          this.directorProjectArray = s;

        }, (error) => {
          let errorJSON = error.error
          let errorMessage = ""
          Object.values(errorJSON).forEach(element => errorMessage += element + "\n");
          this.presentAlert(errorMessage);
        })
      })

      this.soloistProjectService.getSoloistProjectsByProjectId(this.project_id).then(o => {
        o.subscribe((s: Array<SoloistProjects>) => {
          this.storage.set("solistProject", JSON.stringify(s));
          this.soloistProjectArray = s;
        }, (error) => {
          let errorJSON = error.error
          let errorMessage = ""
          Object.values(errorJSON).forEach(element => errorMessage += element + "\n");
          this.presentAlert(errorMessage);
        })
      })



    } else{
      this.storage.get("directorProject").then((s) => {
        this.directorProjectArray = JSON.parse(s);
      })
      this.storage.get("solistProject").then((s) => {
        this.soloistProjectArray = JSON.parse(s);
      })
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Playlists } from '../../../../models/playlists/playlists';
import { PlaylistsService } from 'src/app/services/playlists/playlists.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-works',
  templateUrl: './works.page.html',
  styleUrls: ['./works.page.scss'],
})

export class WorksPage implements OnInit {
  public playlistArray: Array<Playlists> = [];
  public playlist: Playlists;
  project_id = this.activatedRoute.snapshot.paramMap.get('id');;

  constructor(
    private playlistService: PlaylistsService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    public storage: Storage
  ) { }

  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {
    if (navigator.onLine) {
      this.playlistService.getPlaylistProjectsByProjectId(this.project_id).then(o => {
        o.subscribe((s: Array<Playlists>) => {
          this.storage.set("playlistProject", JSON.stringify(s));
          this.playlistArray = s;
        }, (error) => {
          let errorJSON = error.error
          let errorMessage = ""
          Object.values(errorJSON).forEach(element => errorMessage += element + "\n");

          this.presentAlert(errorMessage);
        })
      })

    } else {
      this.storage.get("playlistProject").then((s) => {
        this.playlistArray = JSON.parse(s);
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






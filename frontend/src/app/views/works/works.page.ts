
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Playlists } from '../../models/playlists/playlists';
import { PlaylistsService } from '../../services/playlists/playlists.service';


@Component({
  selector: 'app-works',
  templateUrl: './works.page.html',
  styleUrls: ['./works.page.scss'],
})

export class WorksPage implements OnInit {
  public playlistArray: Array<Playlists> = [];
  public playlist: Playlists;
  project_id = this.activatedRoute.snapshot.paramMap.get('id');;



  constructor(private router: Router, private playlistService: PlaylistsService, private activatedRoute: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {
    this.playlistService.getPlaylistProjectsByProjectId(this.project_id).then(o => {
      o.subscribe((s: Array<Playlists>) => {
      this.playlistArray = s;
    })
  })
  }
}






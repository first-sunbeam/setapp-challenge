import { Component, OnInit } from '@angular/core';
import { SongsListService } from '../../services/songs-list.service';
import { Song } from '../../services/songs.model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css'],
  animations: [
    trigger('insertRemoveTrigger', [
      transition(':enter', [
        style({ height: 0 }),
        animate('.2s', style({ height: '*' })),
      ]),
      transition(':leave', [
        animate('.2s', style({ height: 0 }))
      ])
    ]),
  ]
})
export class SongDetailComponent implements OnInit {
  selectedSong: Song;
  constructor(private songs: SongsListService) { }

  ngOnInit() {
    this.songs.songSelected.subscribe(
      (song: Song) => {
        this.selectedSong = song;
      }
    );
  }

  onModalClose() {
    this.songs.songSelected.emit(null);
  }

}

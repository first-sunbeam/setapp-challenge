import { Component, OnInit } from '@angular/core';
import { SongsListService } from '../../services/songs-list.service';
import { Song } from '../../services/songs.model';
import {selectValueAccessor} from '@angular/forms/src/directives/shared';

@Component({
  selector: 'app-songs-item',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
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

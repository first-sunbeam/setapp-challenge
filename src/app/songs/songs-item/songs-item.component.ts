import { Component, OnInit } from '@angular/core';
import { SongsListService } from '../../services/songs-list.service';
import { Song } from '../../services/songs.model';

@Component({
  selector: 'app-songs-item',
  templateUrl: './songs-item.component.html',
  styleUrls: ['./songs-item.component.css']
})
export class SongsItemComponent implements OnInit {
  selectedSong: Song;
  constructor(private songs: SongsListService) { }

  ngOnInit() {
    this.songs.songSelected.subscribe(
      (song: Song) => {
        this.selectedSong = song;
      }
    );
  }

}

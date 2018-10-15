import { Component, OnInit, Input } from '@angular/core';
import { SongsListService } from '../../services/songs-list.service';
import { Song } from '../../services/songs.model';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {
  public songsList:  Song[] = [];
  public requestError: any;
  @Input() song: Song;

  constructor(private songs: SongsListService) { }

  ngOnInit() {
    this.getSongs(50);
  }

  getSongs(limit: number) {
    return this.songs.get(limit).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
  }

  protected handleResponse (response: any) {
    this.requestError = null;
    return this.songsList = response;
  }

  protected handleError (error: any) {
    return this.requestError = error;
  }

  onSongSelected(song: Song) {
    this.songs.songSelected.emit(song);
  }
}

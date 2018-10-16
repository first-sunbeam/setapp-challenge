import { Component, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';
import { SongsListService } from '../../services/songs-list.service';
import { Song } from '../../services/songs.model';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit, OnChanges {
  public songsList:  Song[] = [];
  public requestError: any;
  @Input() song: Song;
  @Input() songLimit: number;

  constructor(private songs: SongsListService) { }

  ngOnInit() {
    this.getSongs(this.songLimit);
  }

  ngOnChanges(changes: SimpleChanges) {
    const guard = changes.songLimit &&
      changes.songLimit.previousValue !== changes.songLimit.currentValue &&
      !changes.songLimit.firstChange;

    if (guard) {
      this.getSongs(changes.songLimit.currentValue);
    }
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

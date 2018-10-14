import { Component, OnInit } from '@angular/core';
import { SongsListService } from '../../services/songs-list.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {
  public songsList: any;
  public requestError: any;

  constructor(private songs: SongsListService) { }

  ngOnInit() {
    this.getSongs(5);
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
}

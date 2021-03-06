import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SongsListComponent } from './songs/songs-list/songs-list.component';
import { SongDetailComponent } from './songs/song-detail/song-detail.component';
import { SongsListService } from './services/songs-list.service';
import { Songs } from './services/songs.model';
import { SearchFilterPipe } from './shared/filter.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    SongDetailComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    SongsListService,
    Songs
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SongsListComponent } from './songs/songs-list/songs-list.component';
import { SongsItemComponent } from './songs/songs-item/songs-item.component';
import { SongsListService } from './services/songs-list.service';
import { Songs } from './services/songs.model';

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    SongsItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    SongsListService,
    Songs
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

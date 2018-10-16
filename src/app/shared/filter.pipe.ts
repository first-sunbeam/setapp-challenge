import { Pipe, PipeTransform } from '@angular/core';
import { Song } from '../services/songs.model';

@Pipe({
  name: 'searchfilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(songs: Song[], searchText: string): any[] {
    if (!songs) { return []; }
    if (!searchText) { return songs; }

    searchText = searchText.toLowerCase();

    return songs.filter( song => {
      let matchingSong: Song;
      const isMatch = song.name.toLowerCase().includes(searchText) ||
                    song.artist.toLowerCase().includes(searchText);
      if (isMatch) {
        matchingSong = song;
      }
      return matchingSong;
    });
  }
}

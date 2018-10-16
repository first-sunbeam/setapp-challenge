export class Songs {
  private list: Song[] = [];

  public deserialize(entries) {
    this.list = [];
    entries.forEach(entry => {
      const song: Song = {
        name: entry['im:name'].label,
        image: {
          '55': entry['im:image'][0].label,
          '60': entry['im:image'][1].label,
          '170': entry['im:image'][2].label
        },
        artist: entry['im:artist'].label,
        price: entry['im:price'].label,
        category: entry.category.attributes.label,
        releaseDate: entry['im:releaseDate'].attributes.label
      };
      this.list.push(song);
    });
    return this.list;
  }
}

export interface Song {
  name: string;
  image: {
    [key: string]: number;
  };
  artist: string;
  price: string;
  category: string;
  releaseDate: string;
}

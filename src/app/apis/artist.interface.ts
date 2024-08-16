export interface Artist {
  id: number;                      // The artist's Deezer id
  name: string;                    // The artist's name
  link: string;                    // The URL of the artist on Deezer
  share: string;                   // The share link of the artist on Deezer
  picture: string;                 // The URL of the artist picture (can add size parameters)
  picture_small: string;           // The URL of the artist picture in size small
  picture_medium: string;          // The URL of the artist picture in size medium
  picture_big: string;             // The URL of the artist picture in size big
  picture_xl: string;              // The URL of the artist picture in size xl
  nb_album: number;                // The number of the artist's albums
  nb_fan: number;                  // The number of the artist's fans
  radio: boolean;                  // Indicates if the artist has a smartradio
  tracklist: string;               // API link to the top tracks of this artist
}

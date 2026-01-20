export interface SpotifyArtist {
  name: string;
}

export interface SpotifyAlbumImage {
  url: string;
}

export interface SpotifyAlbum {
  images: SpotifyAlbumImage[];
}

export interface SpotifyTrack {
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
}

export interface CurrentlyPlayingResponse {
  item: SpotifyTrack | null;
  isPlaying: boolean;
}

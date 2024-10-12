"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Song {
  item: {
    name: string;
    artists: { name: string }[];
    album: { images: { url: string }[] };
  } | null;
  isPlaying: boolean;
}

export default function Song() {
  const [song, setSong] = useState<Song | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurrentSong = async () => {
      try {
        const response = await axios.get('/api/currently-playing');
        setSong(response.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Error fetching current song:', error.message);
          setError('Error fetching current song');
        } else {
          console.error('Unknown error fetching current song');
          setError('Unknown error fetching current song');
        }
      }
    };

    fetchCurrentSong();
  }, []);

  const getDisplayText = () => {
    if (error) {
      return error;
    }
    if (song?.item) {
      const songStatus = song.isPlaying ? "Currently listening to" : "Last played";
      const songInfo = `${song.item.name} - ${song.item.artists.map(artist => artist.name).join(', ')}`;
      return `${songStatus} ${songInfo}`;
    }
    return "Not currently playing anything";
  };

  return (
    <div>
      {getDisplayText()}
    </div>
  );
}

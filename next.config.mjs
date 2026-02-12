import { config } from 'dotenv';

config();

/** @type {import('next').NextConfig} */
export default {
  env: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
  },
  async rewrites() {
    return [
      {
        source: '/u/script.js',
        destination: 'https://cloud.umami.is/script.js',
      },
      {
        source: '/api/send',
        destination: 'https://cloud.umami.is/api/send',
      },
    ];
  },
};


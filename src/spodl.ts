#!/usr/bin/env node

import { downloadPlaylist } from "./spotify";

if (process.argv.length < 4){
  console.error('spodl requires 2 arguments. The spotify username and playlist url.');
  process.exit()
}

const username = process.argv[2];
const playlistid = process.argv[3];

const main = async () => {
  try {
    await downloadPlaylist(username, playlistid);
  } catch (error) {
    console.error(error);
  }
};

main();

// TODO: fix these import paths to use ~ alias
import { downloadTracks } from "../youtube";
import { config } from "../../config";
import getPlaylistTracks from "./getPlaylistTracks";

const downloadPlaylist = async (userId: string, playlistId: string) => {
  const results = await getPlaylistTracks(userId, playlistId);

  await downloadTracks({
    destinationDir: getDirectoryPath(results.collectionName),
    tracks: results.tracks
  });

  console.log('download complete');
};

const getDirectoryPath = (dirName) => {
  return config.directory + '/' + dirName;
};

export default downloadPlaylist;

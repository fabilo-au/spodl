import { GetTracksForFetch } from "~/interfaces";
import { getApiClient } from "./spotifyApiClient";
import { Playlist } from "./types";

const getPlaylistTracks = async (username: string, playlistId: string): Promise<GetTracksForFetch> => {
  const client = await getApiClient();
  const response = await client.getPlaylist(username, playlistId);
  const playlist = response.body as Playlist;
  return {
    collectionName: playlist.name,
    tracks: playlist.tracks.items.map(item => ({
      trackName: item.track.name,
      artistName: item.track.artists[0].name,
      albumName: item.track.album.name,
    })),
  };
};

export default getPlaylistTracks;

const YouTube = require('youtube-node');
import { exec } from "child_process";
import { DownloadTracksProps } from "~/interfaces"

// update imports to use ~ alias
import { TrackData } from "../types";
import { createDirectory, fileExists } from "../utils";
import getYoutubeClient from "./getYouTubeClient";

let errorCount = 0;

type YouTubeSearchResults = {
  kind: string,
  etag: string,
  nextPageToken: string,
  regionCode: string,
  pageInfo: { totalResults: number, resultsPerPage: number },
  items: {
    id: {
      videoId: string,
    },
  }[]
};

const downloadTracks = async ({ destinationDir, tracks }: DownloadTracksProps) => {
  try {
    createDirectory(destinationDir);
    console.debug('created directory: ' + destinationDir);

    const youTubeClient = getYoutubeClient();

    tracks.forEach(async (track) => {
      const trackFilePath = `${destinationDir}/${getTrackName(track)}.mp3`
      if (fileExists(trackFilePath)) {
        console.log(`file already exsits ${trackFilePath}`);
        return;
      }

      const result = (youTubeClient as any).search(getTrackName(track), 1, {}, (error: any, result: any) => {
        if (error) {
          console.error(error);
          errorCount++;
          if (errorCount >= 3) {
            throw new Error('Too many errors');
          }
          return;
        }
        
        let url = createYouTubeUrl(createYouTubeId(result))
        execDownload(url, trackFilePath);
        errorCount = 0;
      });
    });
  } catch (e) {
    console.error('there was an error downloading tracks to dir: ' + destinationDir);
    throw e;
  }
};

const getTrackName = (trackData: TrackData) =>
  `${trackData.artistName} - ${trackData.trackName}`;

const createYouTubeId = (result: YouTubeSearchResults) => result.items[0].id.videoId;
const createYouTubeUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;

const execDownload = (url: string, destinationPath: string, dlVideo = false) => {
  const cmd = dlVideo 
    ? `youtube-dl -o "${destinationPath}.%(ext)s"`
    : `youtube-dl -o "${destinationPath}.mp3" --extract-audio --audio-format mp3 `;
  
  exec(cmd+url, (error, stdout, _) => {
    if (error) console.log('exec err: '+error);
    else console.log('stdout: '+stdout);
  });
}

export default downloadTracks;

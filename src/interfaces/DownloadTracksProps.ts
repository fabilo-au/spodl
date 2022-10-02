import { TrackData } from "~/types";

interface DownloadTracksProps {
  destinationDir: string,
  tracks: TrackData[],
}

export default DownloadTracksProps;

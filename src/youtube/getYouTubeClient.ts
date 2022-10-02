const YouTube = require('youtube-node');
import { config } from "../../config";

const getYoutubeClient = () => {
  const youTube = new YouTube();
  youTube.setKey(config.youtube.apikey);
  return youTube;
};

export default getYoutubeClient;

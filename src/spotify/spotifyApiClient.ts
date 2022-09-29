import { config } from '../../config';
import SpotifyWebApi from 'spotify-web-api-node';

export const getApiClient = async (): Promise<SpotifyWebApi> => {
  const spotifyApi = new SpotifyWebApi({
    clientId : config.spotify.clientid,
    clientSecret : config.spotify.clientsecret
  });

  const response = await spotifyApi.clientCredentialsGrant();
  spotifyApi.setAccessToken(response.body['access_token']);
  return spotifyApi;
}
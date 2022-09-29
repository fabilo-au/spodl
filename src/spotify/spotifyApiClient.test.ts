import { getApiClient } from './spotifyApiClient';

describe('spotifyApiClient', () => {
  it('creates api client', () => {
    const client = getApiClient();
    expect(client).not.toBeNull();
  });
});

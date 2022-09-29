import getPlaylistTracks from "./getPlaylistTracks";

describe('getPlaylist', () => {
  it('gets playlist', async () => {
    const results = await getPlaylistTracks('1232294451', '6kGKe8GFvuJmBhpRVyf6aX');
    expect(results.tracks.length).toBeGreaterThan(0);
    expect(results.tracks[0].trackName).not.toBeNull();
    expect(results.tracks[0].artistName).not.toBeNull();
    expect(results.tracks[0].albumName).not.toBeNull();
  });
});

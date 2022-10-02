import downloadPlaylist from './downloadPlaylist';

describe('downloadPlaylist', () => {
  it('downloads playlist', async () => {
    await downloadPlaylist(
      '1232294451',
      '1zCUFkei5Zexmx72SMRyxi',
    );
  });
});
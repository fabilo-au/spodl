interface GetTracksForFetch {
  collectionName: string,
  tracks: {
    trackName: string,
    artistName: string,
    albumName: string,
  }[],
}

export default GetTracksForFetch;

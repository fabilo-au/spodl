export type Playlist = {
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  snapshot_id: string
  tracks: Tracks
  uri: string
}

export type Album = {
  album_type: 'single',
  artists: Artist[],
  external_urls: ExternalUrls,
  href: string,
  id: string,
  images: Image[],
  name: string,
  release_date: string,
  total_tracks: number,
  type: string,
  uri: string,
}

export type ExternalUrls = {
  spotify: string
}

export type Image = {
  height: number
  url: string
  width: number
}

export type Tracks = {
  href: string
  items: Item[]
  limit: number
  next: string
  offset: number
  previous: any
  total: number
}

export type Item = {
  track: Track
  video_thumbnail: VideoThumbnail
}

export type Track = {
  album: Album,
  artists: Artist[]
  disc_number: number
  duration_ms: number
  episode?: boolean
  explicit: boolean
  external_ids: ExternalIds
  external_urls: ExternalUrls
  href?: string
  id?: string
  is_local: boolean
  name: string
  popularity: number
  preview_url?: string
  track?: boolean
  track_number: number
  type: string
  uri: string
}

export type Artist = {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}

type ExternalIds = {
  isrc?: string
}

type VideoThumbnail = {
  url: any
}

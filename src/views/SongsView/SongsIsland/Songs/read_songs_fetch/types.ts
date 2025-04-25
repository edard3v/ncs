export interface ReadSongsFetchRes {
  limit: number;
  page: number;
  total_pages: number;
  records: Record[];
}

interface Record {
  id: string;
  name: string;
  duration: number;
  img_url: string;
  song_url: string;
  likes: number;
}

export interface ReadSongsFetchRes {
  limit: number;
  page: number;
  total_pages: number;
  records: Record[];
}

export interface Record {
  id: string;
  name: string;
  song_url: string;
  duration: number;
  likes: number;
  img_url: string;
  created_at: string;
  updated_at: string;
  author_id: string;
}

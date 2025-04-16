import { createQuery } from "@tanstack/solid-query";
import { createSignal } from "solid-js";
import { get_songs_fetch } from "../get_songs_fetch/get_songs_fetch";
import { CLOUDINARY_BASE_VIDEO_URL } from "src/env/env";

const [is_play_audio, set_is_play_audio] = createSignal(false);
const [time_audio, set_time_audio] = createSignal(0);
const [index_songs, set_index_songs] = createSignal(0);
const [audio, set_audio] = createSignal<HTMLAudioElement>();

export const mp3_store = () => {
  const query_get_songs = createQuery(() => ({
    queryKey: ["get_songs"],
    queryFn: get_songs_fetch,
  }));

  const song = () => query_get_songs.data?.records[index_songs()];
  const song_url = () => `${CLOUDINARY_BASE_VIDEO_URL}/${song()?.song_url}`;

  const back = () => {
    const new_index = index_songs() - 1;
    if (new_index < 0) return;
    set_index_songs(new_index);

    if (is_play_audio()) audio()?.play();
    else audio()?.pause();
  };

  const next = () => {
    const new_index = index_songs() + 1;
    if (new_index >= (query_get_songs.data?.records.length ?? 0)) return set_is_play_audio(false);
    set_index_songs(new_index);

    if (is_play_audio()) audio()?.play();
    else audio()?.pause();
  };

  const play_pause = () => {
    const is_play = !is_play_audio();
    if (is_play) audio()?.play();
    else audio()?.pause();

    set_is_play_audio(is_play);
  };

  return {
    query_get_songs,
    audio,
    set_audio,
    song,
    song_url,
    is_play_audio,
    set_is_play_audio,
    time_audio,
    set_time_audio,
    index_songs,
    set_index_songs,
    next,
    back,
    play_pause,
  };
};

import css from "./Mp3.module.css";
import { createQuery } from "@tanstack/solid-query";
import { get_songs_fetch } from "../get_songs_fetch/get_songs_fetch";
import { CLOUDINARY_BASE_IMG_URL, CLOUDINARY_BASE_VIDEO_URL } from "src/env/env";
import Play from "@solid/components/icons/Play";
import Arrow from "@solid/components/icons/Arrow";
import Menu from "@solid/components/icons/Menu";
import Reload from "@solid/components/icons/Reload";
import Pause from "@solid/components/icons/Pause";
import { createSignal, Show } from "solid-js";
import { format_seconds_to_minutes } from "@utils/format_seconds_to_minutes";
import Loading from "@solid/components/icons/Loading";
import { cls } from "@utils/cls";
import ErrSvg from "@solid/components/icons/ErrSvg";

export default function Mp3() {
  const [is_play_audio, set_is_play_audio] = createSignal(false);
  const [audio_time, set_audio_time] = createSignal(0);
  const [index_songs, set_index_songs] = createSignal(0);
  let audio: HTMLAudioElement;

  const query = createQuery(() => ({
    queryKey: ["get_songs"],
    queryFn: get_songs_fetch,
  }));

  const song = () => query.data?.records[index_songs()];
  const song_url = () => `${CLOUDINARY_BASE_VIDEO_URL}/${song()?.song_url}`;

  const back = () => {
    const new_index = index_songs() - 1;
    if (new_index < 0) return;
    set_index_songs(new_index);

    if (is_play_audio()) audio.play();
    else audio.pause();
  };

  const next = () => {
    const new_index = index_songs() + 1;
    if (new_index >= (query.data?.records.length ?? 0)) return set_is_play_audio(false);
    set_index_songs(new_index);

    if (is_play_audio()) audio.play();
    else audio.pause();
  };

  const play_pause = () => {
    const is_play = !is_play_audio();
    if (is_play) audio.play();
    else audio.pause();

    set_is_play_audio(is_play);
  };

  return (
    <Show
      when={query.isSuccess}
      fallback={
        <div class={css.mp3}>
          {query.isLoading && <Loading class="float_center" />}
          {query.isError && <ErrSvg class="float_center" />}
        </div>
      }
    >
      <div class={css.mp3}>
        <div class={css.wrapper_imgs}>
          <img
            class={css.poster}
            src={`${CLOUDINARY_BASE_IMG_URL}/${song()?.img_url}`}
            alt={song()?.name}
          />

          <img
            class={cls([css.gif, is_play_audio() && css.gif_visible])}
            src="music_artic.gif"
            alt="sonido"
          />
        </div>

        <div class={css.banner}>
          <button
            class={css.reload}
            onclick={() => {
              audio.currentTime = 0;
              audio.play();
            }}
          >
            <Reload />
          </button>

          <div class={css.name}>{song()?.name}</div>

          <button class={css.menu}>
            <Menu />
          </button>
        </div>

        <div class={css.timeline}>
          <span>{format_seconds_to_minutes(audio_time())}</span>
          <input
            type="range"
            min={0}
            max={song()?.duration}
            step={1}
            value={audio_time()}
            oninput={(e) => {
              audio.currentTime = Math.ceil(Number(e.currentTarget.value));
            }}
          />
          <span>{format_seconds_to_minutes(song()?.duration)}</span>
          <audio
            ref={(el) => (audio = el)}
            class={css.audio}
            tabindex={-1}
            src={song_url()}
            controls
            onended={next}
            onplay={() => set_is_play_audio(true)}
            ontimeupdate={(e) => set_audio_time(e.currentTarget.currentTime)}
          ></audio>
        </div>

        <div class={css.controls}>
          <button disabled={index_songs() === 0} onclick={back}>
            <Arrow />
          </button>

          <button onclick={play_pause}>{!is_play_audio() ? <Play /> : <Pause />}</button>

          <button disabled={index_songs() >= (query.data?.records.length ?? 0) - 1} onclick={next}>
            <Arrow style={{ rotate: "180deg" }} />
          </button>
        </div>
      </div>
    </Show>
  );
}

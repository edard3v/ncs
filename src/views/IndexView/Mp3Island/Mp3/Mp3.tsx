import css from "./Mp3.module.css";
import Play from "@solid/components/icons/Play";
import Arrow from "@solid/components/icons/Arrow";
import Pause from "@solid/components/icons/Pause";
import { Show } from "solid-js";
import { format_seconds_to_minutes } from "@utils/format_seconds_to_minutes";
import Loading from "@solid/components/icons/Loading";
import ErrSvg from "@solid/components/icons/ErrSvg";
import Poster from "./Poster/Poster";
import { mp3_store } from "./mp3_store";
import Banner from "./Banner/Banner";

export default function Mp3() {
  const mp3 = mp3_store();

  const back = () => {
    const new_index = mp3.index_songs() - 1;
    if (new_index < 0) return;
    mp3.set_index_songs(new_index);

    if (mp3.is_play_audio()) mp3.audio()?.play();
    else mp3.audio()?.pause();
  };

  const next = () => {
    const new_index = mp3.index_songs() + 1;
    if (new_index >= (mp3.query_get_songs.data?.records.length ?? 0))
      return mp3.set_is_play_audio(false);
    mp3.set_index_songs(new_index);

    if (mp3.is_play_audio()) mp3.audio()?.play();
    else mp3.audio()?.pause();
  };

  const play_pause = () => {
    const is_play = !mp3.is_play_audio();
    if (is_play) mp3.audio()?.play();
    else mp3.audio()?.pause();

    mp3.set_is_play_audio(is_play);
  };

  return (
    <Show
      when={mp3.query_get_songs.isSuccess}
      fallback={
        <div class={css.mp3}>
          {mp3.query_get_songs.isLoading && <Loading class="float_center" />}
          {mp3.query_get_songs.isError && <ErrSvg class="float_center" />}
        </div>
      }
    >
      <div class={css.mp3}>
        <Poster />

        <Banner />

        <div class={css.timeline}>
          <span>{format_seconds_to_minutes(mp3.time_audio())}</span>
          <input
            type="range"
            min={0}
            max={mp3.song()?.duration}
            step={1}
            value={mp3.time_audio()}
            oninput={(e) => {
              if (!mp3.audio()) return;
              mp3.audio()!.currentTime = Math.ceil(Number(e.currentTarget.value));
            }}
          />
          <span>{format_seconds_to_minutes(mp3.song()?.duration)}</span>
          <audio
            ref={(el) => mp3.set_audio(el)}
            class={css.audio}
            tabindex={-1}
            src={mp3.song_url()}
            controls
            onended={next}
            onplay={() => mp3.set_is_play_audio(true)}
            ontimeupdate={(e) => mp3.set_time_audio(e.currentTarget.currentTime)}
          ></audio>
        </div>

        <div class={css.controls}>
          <button disabled={mp3.index_songs() === 0} onclick={back}>
            <Arrow />
          </button>

          <button onclick={play_pause}>{!mp3.is_play_audio() ? <Play /> : <Pause />}</button>

          <button
            disabled={mp3.index_songs() >= (mp3.query_get_songs.data?.records.length ?? 0) - 1}
            onclick={next}
          >
            <Arrow style={{ rotate: "180deg" }} />
          </button>
        </div>
      </div>
    </Show>
  );
}

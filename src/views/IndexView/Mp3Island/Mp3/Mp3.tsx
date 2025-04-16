import css from "./Mp3.module.css";
import Play from "@solid/components/icons/Play";
import Arrow from "@solid/components/icons/Arrow";
import Pause from "@solid/components/icons/Pause";
import { Show } from "solid-js";
import Loading from "@solid/components/icons/Loading";
import ErrSvg from "@solid/components/icons/ErrSvg";
import Poster from "./Poster/Poster";
import { mp3_store } from "./mp3_store";
import Banner from "./Banner/Banner";
import Timeline from "./Timeline/Timeline";

export default function Mp3() {
  const mp3 = mp3_store();

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

        <Timeline />

        <div class={css.controls}>
          <button disabled={mp3.index_songs() === 0} onclick={mp3.back}>
            <Arrow />
          </button>

          <button onclick={mp3.play_pause}>{!mp3.is_play_audio() ? <Play /> : <Pause />}</button>

          <button
            disabled={mp3.index_songs() >= (mp3.query_get_songs.data?.records.length ?? 0) - 1}
            onclick={mp3.next}
          >
            <Arrow style={{ rotate: "180deg" }} />
          </button>
        </div>
      </div>
    </Show>
  );
}

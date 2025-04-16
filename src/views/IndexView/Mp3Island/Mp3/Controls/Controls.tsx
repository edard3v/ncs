import css from "./Controls.module.css";
import Arrow from "@solid/components/icons/Arrow";
import { mp3_store } from "../mp3_store";
import Play from "@solid/components/icons/Play";
import Pause from "@solid/components/icons/Pause";

export default function Controls() {
  const mp3 = mp3_store();
  return (
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
  );
}

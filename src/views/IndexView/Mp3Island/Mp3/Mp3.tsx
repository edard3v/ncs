import css from "./Mp3.module.css";
import { Show } from "solid-js";
import Loading from "@solid/components/icons/Loading";
import ErrSvg from "@solid/components/icons/ErrSvg";
import Poster from "./Poster/Poster";
import { mp3_store } from "./mp3_store";
import Banner from "./Banner/Banner";
import Timeline from "./Timeline/Timeline";
import Controls from "./Controls/Controls";

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

        <Controls />
      </div>
    </Show>
  );
}

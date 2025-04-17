import { Match, Switch } from "solid-js";
import Poster from "./Poster/Poster";
import { mp3_store } from "./mp3_store";
import Banner from "./Banner/Banner";
import Timeline from "./Timeline/Timeline";
import Controls from "./Controls/Controls";
import Loading from "@solid/components/icons/Loading";
import ErrSvg from "@solid/components/icons/ErrSvg";

export default function Mp3() {
  const mp3 = mp3_store();

  return (
    <Switch>
      <Match when={mp3.query_get_songs.isLoading}>
        <Loading class="float_center" />
      </Match>

      <Match when={mp3.query_get_songs.isError}>
        <ErrSvg class="float_center" />
      </Match>

      <Match when={mp3.query_get_songs.isSuccess}>
        <Poster />

        <Banner />

        <Timeline />

        <Controls />
      </Match>
    </Switch>
  );
}

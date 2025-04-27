import { createQuery } from "@tanstack/solid-query";
import { read_songs_fetch } from "./read_songs_fetch/read_songs_fetch";
import { login_store } from "@views/LoginView/LoginIsland/Login/login_store";
import { For, Match, Switch } from "solid-js";
import { useStore } from "@nanostores/solid";
import Loading from "@solid/components/icons/Loading";
import ErrSvg from "@solid/components/icons/ErrSvg";

export default function Songs() {
  const store = useStore(login_store.store);
  const query_read_songs = createQuery(() => ({
    queryKey: ["read_songs"],
    queryFn: ({ signal }) => read_songs_fetch({ signal, token: store().token }),
  }));

  return (
    <Switch>
      <Match when={query_read_songs.isLoading}>
        <Loading class="float_center" />
      </Match>

      <Match when={query_read_songs.isError}>
        <ErrSvg class="float_center" />
      </Match>

      <Match when={query_read_songs.data}>
        <For each={query_read_songs.data?.records}>
          {(item) => (
            <div>
              <div>{item.name}</div>
            </div>
          )}
        </For>
      </Match>
    </Switch>
  );
}

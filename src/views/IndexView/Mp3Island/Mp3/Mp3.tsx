import { createQuery } from "@tanstack/solid-query";
import css from "./Mp3.module.css";
import { get_songs_fetch } from "../get_songs_fetch/get_songs_fetch";

export default function Mp3() {
  const query = createQuery(() => ({
    queryKey: ["get_songs"],
    queryFn: get_songs_fetch,
  }));

  return <div class={css.mp3}>Mp3</div>;
}

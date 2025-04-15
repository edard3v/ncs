import css from "./Mp3.module.css";
import { createQuery } from "@tanstack/solid-query";
import { get_songs_fetch } from "../get_songs_fetch/get_songs_fetch";
import { CLOUDINARY_BASE_IMG_URL } from "src/env/env";
import Play from "@solid/components/icons/Play";
import Arrow from "@solid/components/icons/Arrow";
import Menu from "@solid/components/icons/Menu";
import Reload from "@solid/components/icons/Reload";
import Pause from "@solid/components/icons/Pause";
import { createSignal } from "solid-js";
import { format_seconds_to_minutes } from "@utils/format_seconds_to_minutes";

export default function Mp3() {
  const [is_play, set_is_play] = createSignal(false);

  const query = createQuery(() => ({
    queryKey: ["get_songs"],
    queryFn: get_songs_fetch,
  }));

  const item = () => query.data?.records[0];

  return (
    <div class={css.mp3}>
      <div class={css.wrapper_imgs}>
        <img
          class={css.poster}
          src={`${CLOUDINARY_BASE_IMG_URL}/${item()?.img_url}`}
          alt={item()?.name}
        />

        <img class={css.gif} src="music_artic.gif" alt="sonido" />
      </div>

      <div class={css.banner}>
        <button class={css.reload}>
          <Reload />
        </button>
        <div class={css.name}>{item()?.name}</div>
        <button class={css.menu}>
          <Menu />
        </button>
      </div>

      <div class={css.timeline}>
        <span>00:00</span>
        <input type="range" min={0} max={item()?.duration} value={0} step={1} />
        <span>{format_seconds_to_minutes(item()?.duration)}</span>
      </div>

      <div class={css.controls}>
        <button>
          <Arrow />
        </button>
        <button onclick={() => set_is_play(!is_play())}>{!is_play() ? <Play /> : <Pause />}</button>

        <button>
          <Arrow style={{ rotate: "180deg" }} />
        </button>
      </div>
    </div>
  );
}

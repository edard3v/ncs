import css from "./Banner.module.css";
import { mp3_store } from "../mp3_store";
import Reload from "@solid/components/icons/Reload";
import Menu from "@solid/components/icons/Menu";

export default function Banner() {
  const mp3 = mp3_store();
  return (
    <div class={css.banner}>
      <button
        class={css.reload}
        onclick={() => {
          if (!mp3.audio()) return;
          mp3.audio()!.currentTime = 0;
          mp3.audio()?.play();
        }}
      >
        <Reload />
      </button>

      <div class={css.name}>{mp3.song()?.name}</div>

      <button class={css.menu}>
        <Menu />
      </button>
    </div>
  );
}

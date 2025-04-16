import { cls } from "@utils/cls";
import { mp3_store } from "../mp3_store";
import css from "./Poster.module.css";
import { CLOUDINARY_BASE_IMG_URL } from "src/env/env";

export default function Poster() {
  const mp3 = mp3_store();

  return (
    <div class={css.poster}>
      <img
        class={css.img}
        src={`${CLOUDINARY_BASE_IMG_URL}/${mp3.song()?.img_url}`}
        alt={mp3.song()?.name}
      />

      <img
        class={cls([css.gif, mp3.is_play_audio() && css.gif_visible])}
        src="music_artic.gif"
        alt="sonido"
      />
    </div>
  );
}

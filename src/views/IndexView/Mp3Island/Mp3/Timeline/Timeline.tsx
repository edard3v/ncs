import css from "./Timeline.module.css";
import { mp3_store } from "../mp3_store";
import { format_seconds_to_minutes } from "@utils/format_seconds_to_minutes";

export default function Timeline() {
  const mp3 = mp3_store();

  return (
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
        onended={mp3.next}
        onplay={() => mp3.set_is_play_audio(true)}
        ontimeupdate={(e) => mp3.set_time_audio(e.currentTarget.currentTime)}
      ></audio>
    </div>
  );
}

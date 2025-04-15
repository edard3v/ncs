import css from "./InputPassword.module.css";
import { type ComponentProps, createSignal, splitProps } from "solid-js";
import { cls } from "@utils/cls";
import ErrMsg from "@solid/components/shared/ErrMsg/ErrMsg";

export default function InputPassword(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err", "placeholder"]);
  const [is_visible, set_is_visible] = createSignal(false);

  return (
    <label class={cls([css.wrapper, p.class])}>
      <input
        {...rest}
        type={is_visible() ? "text" : "password"}
        placeholder={p.placeholder ?? "Contraseña"}
        class={cls([p.err && css.input_err])}
      />
      <span class={css.emoji} onClick={() => set_is_visible(!is_visible())}>
        {is_visible() ? "🧐" : "😵"}
      </span>

      <ErrMsg err={p.err} />
    </label>
  );
}

type Props = ComponentProps<"input"> & {
  err?: string;
};

import ErrMsg from "@solid/components/shared/ErrMsg/ErrMsg";
import css from "./TextArea.module.css";
import { cls } from "@utils/cls";
import { type ComponentProps, splitProps } from "solid-js";

export default function TextArea(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err", "placeholder"]);

  return (
    <label class={cls([css.wrapper, p.class])}>
      <textarea
        {...rest}
        class={cls([p.err && css.input_err])}
        placeholder={p.placeholder ?? "Párrafo"}
      />
      <ErrMsg err={p.err} />
    </label>
  );
}

type Props = ComponentProps<"textarea"> & {
  err?: string;
};

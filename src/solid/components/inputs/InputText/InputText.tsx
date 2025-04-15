import css from "./InputText.module.css";
import { type ComponentProps, splitProps } from "solid-js";
import { cls } from "@utils/cls";
import ErrMsg from "@solid/components/shared/ErrMsg/ErrMsg";

export default function InputText(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err", "placeholder"]);

  return (
    <label class={cls([css.wrapper, p.class])}>
      <input
        {...rest}
        type="text"
        class={cls([p.err && css.input_err])}
        title={p.err}
        placeholder={p.placeholder ?? "Texto"}
      />
      <ErrMsg err={p.err} />
    </label>
  );
}

type Props = ComponentProps<"input"> & {
  err?: string;
};

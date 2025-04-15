import css from "./InputEmail.module.css";
import { type ComponentProps, splitProps } from "solid-js";
import { cls } from "@utils/cls";
import ErrMsg from "@solid/components/shared/ErrMsg/ErrMsg";

export default function InputEmail(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err", "placeholder"]);

  return (
    <label class={cls([css.wrapper, p.class])}>
      <input
        {...rest}
        type="email"
        placeholder={p.placeholder ?? "Correo electrónico"}
        class={cls([p.err && css.input_err])}
      />

      <ErrMsg err={p.err} />
    </label>
  );
}

type Props = ComponentProps<"input"> & {
  err?: string;
};

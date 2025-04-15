import css from "./InputNumber.module.css";
import { splitProps, type ComponentProps } from "solid-js";
import { cls } from "@utils/cls";
import ErrMsg from "@solid/components/shared/ErrMsg/ErrMsg";

export default function InputNumber(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err", "placeholder"]);

  return (
    <label class={cls([css.wrapper, p.class])}>
      <input
        {...rest}
        type="number"
        min={0}
        class={cls([p.err && css.input_err])}
        placeholder={p.placeholder ?? "Número"}
      />
      <ErrMsg err={p.err} />
    </label>
  );
}

type Props = ComponentProps<"input"> & {
  err?: string;
};

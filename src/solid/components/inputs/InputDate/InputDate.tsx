import ErrMsg from "@solid/components/shared/ErrMsg/ErrMsg";
import css from "./InputDate.module.css";
import { cls } from "@utils/cls";
import { type ComponentProps, splitProps } from "solid-js";

export default function InputDate(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err"]);

  return (
    <label class={cls([css.wrapper, p.class])}>
      <input {...rest} type="date" class={cls([p.err && css.input_err])} />
      <ErrMsg err={p.err} />
    </label>
  );
}

type Props = ComponentProps<"input"> & {
  err?: string;
};

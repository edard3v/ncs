import css from "./ErrMsg.module.css";
import ErrSvg from "@solid/components/icons/ErrSvg";
import { cls } from "@utils/cls";
import { Show, splitProps, type ComponentProps } from "solid-js";

export default function ErrMsg(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err"]);

  return (
    <Show when={p.err}>
      <span {...rest} class={cls([css.err, p.class])} title={p.err}>
        <ErrSvg />
        <span>{p.err}</span>
      </span>
    </Show>
  );
}

type Props = ComponentProps<"span"> & {
  err?: string;
};

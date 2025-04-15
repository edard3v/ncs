import Loading from "@solid/components/icons/Loading";
import css from "./Btn.module.css";
import Cross from "@solid/components/icons/Cross";
import { cls } from "@utils/cls";
import { Match, splitProps, Switch } from "solid-js";
import type { ComponentProps } from "solid-js";

export default function Btn(props: Props) {
  const [p, rest] = splitProps(props, ["class", "children", "is_loading", "is_err", "disabled"]);

  return (
    <button {...rest} class={cls([css.btn, p.class])} disabled={p.disabled || p.is_loading}>
      <Switch fallback={p.children}>
        <Match when={p.is_loading}>
          <Loading class={css.loading} width={20} height={20} />
        </Match>

        <Match when={p.is_err && !p.disabled}>
          {p.children}
          <Cross class={css.err} width={20} height={20} />
        </Match>
      </Switch>
    </button>
  );
}

interface Props extends ComponentProps<"button"> {
  is_loading?: boolean;
  is_err?: boolean;
}

import { createSignal, splitProps, type ComponentProps } from "solid-js";
import css from "./InputFile.module.css";
import { cls } from "@utils/cls";
import ErrMsg from "@solid/components/shared/ErrMsg/ErrMsg";

export default function InputFile(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err", "placeholder"]);
  const PLACEHOLDER = p.placeholder ?? "Cargar archivo";
  const [file_name, set_file_name] = createSignal(PLACEHOLDER);

  const handle_file = (event: Event) => {
    const input = event.currentTarget as HTMLInputElement;
    set_file_name(input.files?.[0]?.name || file_name);

    const txt = input.parentElement?.querySelector("div");
    if (input.files?.length) {
      txt?.setAttribute("style", "color:var(--primary);");
    } else {
      txt?.setAttribute("style", "color:var(--grey);");
      set_file_name(PLACEHOLDER);
    }
  };

  return (
    <label class={cls([css.wrapper, p.err && css.wrapper_err, p.class])}>
      <input {...rest} type="file" class={css.input} onChange={handle_file} />
      <div class={css.txt}>{file_name()}</div>
      <ErrMsg err={p.err} />
    </label>
  );
}

type Props = ComponentProps<"input"> & {
  err?: string;
};

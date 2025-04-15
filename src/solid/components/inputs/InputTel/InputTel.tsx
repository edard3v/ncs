import css from "./InputTel.module.css";
import { splitProps, type ComponentProps } from "solid-js";
import { cls } from "@utils/cls";
import { COUNTRIES } from "./countries";
import ErrMsg from "@solid/components/shared/ErrMsg/ErrMsg";

export default function InputTel(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err", "placeholder"]);

  return (
    <label class={cls([css.wrapper, p.class])}>
      <select name="code">
        {COUNTRIES.map((country) => (
          <option value={country.dial_code}>{country.flag}</option>
        ))}
      </select>
      <input
        {...rest}
        type="number"
        min={0}
        class={cls([p.err && css.input_err])}
        placeholder={p.placeholder ?? "Tel"}
      />
      <ErrMsg err={p.err} class={css.err} />
    </label>
  );
}

type Props = ComponentProps<"input"> & {
  err?: string;
};

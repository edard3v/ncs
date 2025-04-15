import css from "./Confirm.module.css";
import Btn from "@solid/components/buttons/Btn/Btn";
import { splitProps, type ComponentProps } from "solid-js";
import { cls } from "@utils/cls";

export default function Confirm(props: Props) {
  const [p, rest] = splitProps(props, [
    "class",
    "msg",
    "msg_btn_confirm",
    "msg_btn_cancel",
    "on_click_confirm",
    "on_click_cancel",
  ]);

  return (
    <dialog {...rest} class={cls([css.modal, p.class])}>
      <div>{p.msg ?? "¿Seguro que desea realizar esta acción?"}</div>

      <div class={css.wrapper_btns}>
        <form>
          <Btn formmethod="dialog" onclick={p.on_click_confirm}>
            {p.msg_btn_confirm ?? "Confirmar"}
          </Btn>
        </form>

        <form>
          <Btn formmethod="dialog" onclick={p.on_click_cancel}>
            {p.msg_btn_confirm ?? "Cancelar"}
          </Btn>
        </form>
      </div>
    </dialog>
  );
}

type Props = ComponentProps<"dialog"> & {
  msg?: string;
  msg_btn_confirm?: string;
  msg_btn_cancel?: string;
  on_click_confirm?: () => void;
  on_click_cancel?: () => void;
};

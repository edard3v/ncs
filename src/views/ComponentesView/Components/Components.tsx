import InputNumber from "@solid/components/inputs/InputNumber/InputNumber";
import css from "./Components.module.css";
import InputEmail from "@solid/components/inputs/InputEmail/InputEmail";
import InputPassword from "@solid/components/inputs/InputPassword/InputPassword";
import InputTel from "@solid/components/inputs/InputTel/InputTel";
import InputText from "@solid/components/inputs/InputText/InputText";
import InputDate from "@solid/components/inputs/InputDate/InputDate";
import TextArea from "@solid/components/inputs/TextArea/TextArea";
import InputFile from "@solid/components/inputs/InputFile/InputFile";
import Btn from "@solid/components/buttons/Btn/Btn";
import Alert from "@solid/components/modals/Alert/Alert";
import { dom } from "@utils/dom/dom";
import Confirm from "@solid/components/modals/Confirm/Confirm";

export default function Components() {
  const handle_alert = () => {
    const alert = dom.select("comp_alert") as HTMLDialogElement;
    alert.showModal();
  };

  const handle_confirm = () => {
    const alert = dom.select("comp_confirm") as HTMLDialogElement;
    alert.showModal();
  };

  return (
    <div class={css.wrapper}>
      <form class={css.form} onsubmit={(e) => e.preventDefault()}>
        <InputText />
        <InputNumber />
        <InputEmail />
        <InputPassword />
        <InputTel />
        <InputDate />
        <TextArea />
        <InputFile />
        <Btn>Enviar</Btn>
      </form>

      <Btn onclick={handle_alert}>Abrir Alert</Btn>
      <Alert id="comp_alert" />

      <Btn onclick={handle_confirm}>Abrir Confirm</Btn>
      <Confirm id="comp_confirm" />
    </div>
  );
}

import InputEmail from "@solid/components/inputs/InputEmail/InputEmail";
import css from "./Login.module.css";
import InputPassword from "@solid/components/inputs/InputPassword/InputPassword";
import Btn from "@solid/components/buttons/Btn/Btn";
import { create_form } from "@solid/libs/create_form/create_form";
import { email_zod } from "@utils/zod/email_zod";
import { password_zod } from "@utils/zod/password_zod";
import { z } from "astro/zod";
import { createMutation } from "@tanstack/solid-query";
import { login_fetch } from "./login_fetch/login_fetch";
import { login_store } from "./login_store";
import { navigate } from "astro:transitions/client";
import { INDEX } from "@views/IndexView/config";

export default function Login() {
  const controller = new AbortController();

  const mutation = createMutation(() => ({
    mutationFn: login_fetch,
    onSuccess(data) {
      login_store.login(data.token);
      navigate(INDEX.href);
    },
  }));

  const schema = z.object({ email: email_zod, password: password_zod });
  const form = create_form<z.infer<typeof schema>>(schema, {
    success({ inputs }) {
      mutation.mutate({ signal: controller.signal, dto: { ...inputs } });
    },
  });

  return (
    <div class={css.login}>
      <form
        ref={form.ref}
        onchange={form.update}
        onsubmit={(e) => {
          e.preventDefault();
          form.success();
        }}
      >
        <InputEmail name="email" err={form.errors()?.email} />
        <InputPassword name="password" err={form.errors()?.password} />
        <Btn>Login</Btn>
      </form>
    </div>
  );
}

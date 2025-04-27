import Btn from "@solid/components/buttons/Btn/Btn";
import { use_is_login } from "@solid/hooks/use_is_login";
import { LOGIN } from "@views/LoginView/config";
import { login_store } from "@views/LoginView/LoginIsland/Login/login_store";
import { navigate } from "astro:transitions/client";
import { Show } from "solid-js";

export default function LoginLogout() {
  const is_login = use_is_login();
  return (
    <Show when={!is_login()} fallback={<Btn onclick={login_store.logout}>Logout</Btn>}>
      <Btn onclick={() => navigate(LOGIN.href)}>{LOGIN.display}</Btn>
    </Show>
  );
}

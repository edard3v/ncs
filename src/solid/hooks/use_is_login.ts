import { useStore } from "@nanostores/solid";
import { login_store } from "@views/LoginView/LoginIsland/Login/login_store";

export function use_is_login() {
  const store = useStore(login_store.store);

  const is_login = () => Boolean(store().token);

  return is_login;
}

import { Role } from "@enums/Role";
import { useStore } from "@nanostores/solid";
import { login_store } from "@views/LoginView/LoginIsland/Login/login_store";

export function use_is_admin() {
  const store = useStore(login_store.store);

  const is_admin = () => Boolean(store().token && login_store.get_payload()?.role === Role.admin);

  return is_admin;
}

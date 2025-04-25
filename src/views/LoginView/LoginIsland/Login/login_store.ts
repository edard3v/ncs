import { jwtDecode, type JwtPayload } from "jwt-decode";
import type { Role } from "@enums/Role";
import { refresh_login_fetch } from "./refresh_login_fetch/refresh_login_fetch";
import { persistentMap } from "@nanostores/persistent";

const store = () => {
  const store = persistentMap("login_store", {
    token: "",
  });

  const login = (token: string) => {
    store.setKey("token", token);
  };

  const logout = () => {
    store.setKey("token", "");
  };

  const get_payload = (): TokenPayload | undefined => {
    const token = store.get().token;
    if (!token) return undefined;
    return jwtDecode(token);
  };

  const refresh_login = async (signal: AbortSignal) => {
    const token = store.get().token;

    if (!token) return;

    try {
      const info_token: TokenPayload = jwtDecode(token);
      const current_time = Math.floor(Date.now() / 1000);
      const days_in_seconds = 3 * 24 * 60 * 60;
      const is_time_to_refresh = current_time - info_token.iat! > days_in_seconds;

      if (!is_time_to_refresh) return login(token);

      const { token: new_token } = await refresh_login_fetch({ signal, token });
      login(new_token);
    } catch {
      logout();
    }
  };

  return {
    store,
    login,
    logout,
    refresh_login,
    get_payload,
  };
};

export const login_store = store();

export type TokenPayload = JwtPayload & {
  id: string;
  role: Role;
  email: string;
};

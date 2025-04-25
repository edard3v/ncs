import { Err } from "@errors/Err";
import { NcsUrls } from "@ncs-api/urls";

export const refresh_login_fetch = async (
  params: RefreshLoginFetch
): Promise<{ token: string }> => {
  const { signal, token } = params;

  const res = await fetch(NcsUrls.refresh_login, {
    method: "POST",
    signal,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Err(res.status, await res.text());
  }

  return await res.json();
};

export type RefreshLoginFetch = {
  signal: AbortSignal;
  token: string;
};

import { NcsUrls } from "@ncs-api/urls";
import type { LoginSchema } from "../login_schema";
import { Err } from "@errors/Err";

export const login_fetch = async (params: LoginFetchParams): Promise<{ token: string }> => {
  const { signal, dto } = params;

  const res = await fetch(NcsUrls.login, {
    signal,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  if (!res.ok) {
    throw new Err(res.status, await res.text());
  }

  return await res.json();
};

type LoginFetchParams = {
  signal: AbortSignal;
  dto: LoginSchema;
};

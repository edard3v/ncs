import { NcsUrls } from "@ncs-api/urls";
import type { GetSongsFetchRes } from "./types";

export const get_songs_fetch = async (params: GetSongsFetchParams): Promise<GetSongsFetchRes> => {
  const { signal } = params;

  const res = await fetch(NcsUrls.get_songs, {
    signal,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new TypeError("Algo va mal con get_songs_fetch");
  }

  return await res.json();
};

type GetSongsFetchParams = {
  signal: AbortSignal;
};

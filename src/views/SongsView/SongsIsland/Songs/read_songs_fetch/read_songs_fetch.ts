import { NcsUrls } from "@ncs-api/urls";
import type { ReadSongsFetchRes } from "./types";

export const read_songs_fetch = async (
  params: ReadSongsFetchParams
): Promise<ReadSongsFetchRes> => {
  const { signal } = params;

  const res = await fetch(NcsUrls.read_songs, {
    signal,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new TypeError("Algo va mal con read_songs_fetch");
  }

  return await res.json();
};

type ReadSongsFetchParams = {
  signal: AbortSignal;
};

import { QueryClientProvider } from "@tanstack/solid-query";
import { query_client } from "@solid/libs/tan_stack_query/query_client";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import Songs from "./Songs/Songs";
import { Show } from "solid-js";
import { use_is_admin } from "@solid/hooks/use_is_admin";
import Navigate from "@solid/components/shared/Navigate/Navigate";
import { LOGIN } from "@views/LoginView/config";

export default function SongsIsland() {
  const is_admin = use_is_admin();
  return (
    <Show when={is_admin()} fallback={<Navigate path={LOGIN.href} />}>
      <QueryClientProvider client={query_client}>
        <Songs />
        <SolidQueryDevtools />
      </QueryClientProvider>
    </Show>
  );
}

import { QueryClientProvider } from "@tanstack/solid-query";
import { query_client } from "@solid/libs/tan_stack_query/query_client";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import Songs from "./Songs/Songs";

export default function SongsIsland() {
  return (
    <QueryClientProvider client={query_client}>
      <Songs />
      <SolidQueryDevtools />
    </QueryClientProvider>
  );
}

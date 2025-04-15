import { QueryClientProvider } from "@tanstack/solid-query";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import { query_client } from "@solid/libs/tan_stack_query/query_client";
import Components from "../Components/Components";

export default function ComponentsIsland() {
  return (
    <QueryClientProvider client={query_client}>
      <Components />
      <SolidQueryDevtools />
    </QueryClientProvider>
  );
}

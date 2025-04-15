import { QueryClientProvider } from "@tanstack/solid-query";
import { query_client } from "@solid/libs/tan_stack_query/query_client";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import Mp3 from "./Mp3/Mp3";

export default function Mp3Island() {
  return (
    <QueryClientProvider client={query_client}>
      <Mp3 />
      <SolidQueryDevtools />
    </QueryClientProvider>
  );
}

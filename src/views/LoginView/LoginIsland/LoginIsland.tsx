import { QueryClientProvider } from "@tanstack/solid-query";
import { query_client } from "@solid/libs/tan_stack_query/query_client";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import Login from "./Login/Login";

export default function LoginIsland() {
  return (
    <QueryClientProvider client={query_client}>
      <Login />
      <SolidQueryDevtools />
    </QueryClientProvider>
  );
}

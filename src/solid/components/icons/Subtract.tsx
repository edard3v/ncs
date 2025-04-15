import type { ComponentProps } from "solid-js";

export default function Subtract(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M19 11H5v2h14z" />
    </svg>
  );
}

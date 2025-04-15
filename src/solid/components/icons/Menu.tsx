import type { ComponentProps } from "solid-js";

export default function Menu(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1">
        <circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-width="2" />
        <path stroke-width="3" d="M12.01 12v.01H12V12zm4.5 0v.01h-.01V12zm-9 0v.01H7.5V12z" />
      </g>
    </svg>
  );
}

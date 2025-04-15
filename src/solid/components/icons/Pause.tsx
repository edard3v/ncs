import type { ComponentProps } from "solid-js";

export default function Pause(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M22 12c0-5.54-4.46-10-10-10c-1.17 0-2.3.19-3.38.56l.7 1.94c.85-.34 1.74-.53 2.68-.53c4.41 0 8.03 3.62 8.03 8.03s-3.62 8.03-8.03 8.03S3.97 16.41 3.97 12c0-.94.19-1.88.53-2.72l-1.94-.66C2.19 9.7 2 10.83 2 12c0 5.54 4.46 10 10 10s10-4.46 10-10M5.47 7c-.79 0-1.5-.68-1.5-1.53c0-.79.71-1.5 1.5-1.5c.85 0 1.53.71 1.53 1.5C7 6.32 6.32 7 5.47 7M9 9h2v6H9m4-6h2v6h-2"
      />
    </svg>
  );
}

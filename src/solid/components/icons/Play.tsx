import type { ComponentProps } from "solid-js";

export default function Play(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m10 16l6-4l-6-4zm2 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-1.075.225-2.113t.65-2.012l1.55 1.55q-.2.65-.312 1.287T4 12q0 3.35 2.325 5.675T12 20t5.675-2.325T20 12t-2.325-5.675T12 4q-.675 0-1.312.112t-1.263.313L7.9 2.9q1-.45 2-.675T12 2q2.075 0 3.9.787t3.175 2.138T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22M5.5 7q-.625 0-1.062-.437T4 5.5t.438-1.062T5.5 4t1.063.438T7 5.5t-.437 1.063T5.5 7m6.5 5"
      />
    </svg>
  );
}

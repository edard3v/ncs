import { navigate } from "astro:transitions/client";

export default function Navigate(props: Props) {
  navigate(props.path);
  return null;
}

type Props = { path: string };

import { email_zod } from "@utils/zod/email_zod";
import { password_zod } from "@utils/zod/password_zod";
import { z } from "astro/zod";

export const login_schema = z
  .object({
    email: email_zod,
    password: password_zod,
  })
  .strict();

export type LoginSchema = z.infer<typeof login_schema>;

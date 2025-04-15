import { z } from "astro/zod";

export const dir_zod = z.string().min(1).max(255);

import { z } from "astro/zod";

export const price_zod = z.coerce.number().nonnegative();

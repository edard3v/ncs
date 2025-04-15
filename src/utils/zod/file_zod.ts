import { z } from "astro/zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const file_zod = z
  .instanceof(File)
  .refine((file) => file.size > 0 && file.size <= MAX_FILE_SIZE, {
    message: `El archivo debe tener entre 1 byte y 5MB`,
  });

// Generated by ts-to-zod
import { z } from 'zod';

export const myCustomTypeSchema = z.object({
  value: z.number(),
  ids: z.array(z.string()),
});

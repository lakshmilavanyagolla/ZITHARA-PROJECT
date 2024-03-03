import { z } from "zod";

export const userDataSchema = z.object({
  name: z.string().min(2, {
    message: "customer name required",
  }),
  location: z.string().min(2, {
    message: "location required",
  }),
  age: z.coerce.number().min(1).max(100),
  phone: z.string().min(10).max(12),
});

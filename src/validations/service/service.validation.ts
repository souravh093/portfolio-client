import { z } from "zod";
import { imageSchema } from "../image/image.validation";

export const serviceValidation = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    description: z.string().min(1, { message: "Description is required" }),
  })
  .merge(imageSchema);

export type ServiceValues = z.infer<typeof serviceValidation>;

import { z } from "zod";
import { imageSchema } from "../image/image.validation";

export const technologyValidation = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    category: z.string().min(1, { message: "Category is required" }),
  })
  .merge(imageSchema);

export type TechnologyValues = z.infer<typeof technologyValidation>;

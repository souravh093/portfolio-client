import { z } from "zod";

export const experienceValidation = z.object({
  startDate: z.string().nonempty(),
  endDate: z.string().nonempty(),
  position: z.string().nonempty(),
  companyName: z.string().nonempty(),
});

export type TExperience = z.infer<typeof experienceValidation>;

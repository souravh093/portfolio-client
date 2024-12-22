import { z } from "zod";

export const educationValidation = z.object({
  startDate: z
    .string({ message: "Start date is required!" })
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Start date must be a valid date!",
    }),
  endDate: z
    .string({ message: "End date is required!" })
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "End date must be a valid date!",
    }),
  degree: z
    .string({ message: "Degree is required!" })
    .min(1, { message: "Degree is required!" }),
  institutionName: z
    .string({ message: "Institution name is required!" })
    .min(1, { message: "Institution name is required!" }),
});

export type EducationValues = z.infer<typeof educationValidation>;

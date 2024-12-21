import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z
    .string({ message: "Email is required!" })
    .min(1, { message: "Email is required!" })
    .email({ message: "Invalid email" }),

  password: z
    .string({ message: "Password is required!" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),
});

export type LoginValues = z.infer<typeof loginValidationSchema>;
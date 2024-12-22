/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginUser } from "@/services/login";
import { useMutation } from "@tanstack/react-query";

import { FieldValues } from "react-hook-form";

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (loginData: FieldValues) => {
      return await loginUser(loginData);
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
    },
    onError: (error: any) => {
      console.log(error)
      console.error("Login failed:", error.message);
    },
  });
};

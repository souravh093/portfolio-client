import { loginUser } from "@/services/login";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { FieldValues } from "react-hook-form";

export const useLogin = () => {
//   const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (loginData: FieldValues) => {
      return await loginUser(loginData);
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);

    //   // Optionally invalidate related queries
    //   queryClient.invalidateQueries(["user"]);

      // Trigger any additional logic if needed
    },
    onError: (error: any) => {
      console.error("Login failed:", error.message);
    },
  });
};

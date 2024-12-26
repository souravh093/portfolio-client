/* eslint-disable @typescript-eslint/no-explicit-any */
import { addContact } from "@/services/contactClient";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "./use-toast";

export const useAddContact = () => {
  return useMutation({
    mutationKey: ["contacts"],
    mutationFn: async (contactData: FieldValues) => {
      return await addContact(contactData);
    },
    onSuccess: () => {
      toast({
        title: "Message send successfully",
        description: "Thank you for contacting me",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Add contact failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};



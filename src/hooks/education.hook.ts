/* eslint-disable @typescript-eslint/no-explicit-any */
import { addEducation, deleteEducations } from "@/services/education";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "./use-toast";

export const useEducation = () => {
  return useMutation({
    mutationKey: ["educations"],
    mutationFn: async (educationData: FieldValues) => {
      return await addEducation(educationData);
    },
    onSuccess: () => {
      toast({
        title: "Education added",
        description: "Education has been added successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Add education failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useDeleteEducation = () => {
  return useMutation({
    mutationKey: ["educations"],
    mutationFn: async (id: string) => {
      return await deleteEducations(id);
    },
    onSuccess: () => {
      toast({
        title: "Education deleted",
        description: "Education has been deleted successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Delete education failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  addExperience,
  deleteExperience,
  getExperience,
  updateExperience,
} from "@/services/experience";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "./use-toast";

export const useAddExperience = () => {
  return useMutation({
    mutationKey: ["experience"],
    mutationFn: async (experienceData: FieldValues) => {
      return await addExperience(experienceData);
    },
    onSuccess: () => {
      toast({
        title: "Experience added",
        description: "Experience has been added successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Add Experience failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useDeleteExperience = () => {
  return useMutation({
    mutationKey: ["experience"],
    mutationFn: async (id: string) => {
      return await deleteExperience(id);
    },
    onSuccess: () => {
      toast({
        title: "Experience deleted",
        description: "Experience has been deleted successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Delete Experience failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useUpdateExperience = () => {
  return useMutation({
    mutationKey: ["experience"],
    mutationFn: async (data: { id: string; experienceData: FieldValues }) => {
      return await updateExperience(data.id, data.experienceData);
    },
    onSuccess: () => {
      toast({
        title: "Experience updated",
        description: "Experience has been updated successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Update Experience failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useGetExperience = (id: string) => {
  return useQuery({
    queryKey: ["experiences", id],
    queryFn: async () => {
      return await getExperience(id);
    },
  });
};

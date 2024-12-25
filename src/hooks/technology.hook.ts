/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  addTechnology,
  deleteTechnology,
  getTechnologies,
} from "@/services/technology";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "./use-toast";
import { FieldValues } from "react-hook-form";

export const useAddTechnology = () => {
  return useMutation({
    mutationKey: ["technologies"],
    mutationFn: async (technologyData: FieldValues) => {
      return await addTechnology(technologyData);
    },
    onSuccess: () => {
      toast({
        title: "Technology added",
        description: "Technology has been added successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Add technology failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useDeleteTechnology = () => {
  return useMutation({
    mutationKey: ["technologies"],
    mutationFn: async (id: string) => {
      return await deleteTechnology(id);
    },
    onSuccess: () => {
      toast({
        title: "Technology deleted",
        description: "Technology has been deleted successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Delete technology failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useGetTechnologies = () => {
  return useQuery({
    queryKey: ["technologies"],
    queryFn: async () => {
      return await getTechnologies();
    },
  });
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { addEducation, deleteEducations, getEducation, updateEducation } from "@/services/education";
import { useMutation, useQuery } from "@tanstack/react-query";
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

export const useUpdateEducation = () => {
  return useMutation({
    mutationKey: ["educations"],
    mutationFn: async (data: { id: string; educationData: FieldValues }) => {
      return await updateEducation(data.id, data.educationData);
    },
    onSuccess: () => {
      toast({
        title: "Education updated",
        description: "Education has been updated successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Update education failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useGetEducationById = (id: string) => {
  return useQuery({
    queryKey: ["educations", id],
    queryFn: async () => {
      try {
        return await getEducation(id);
      } catch (error: any) {
        toast({
          title: "Get education failed",
          description: error.message,
          variant: "destructive",
        });
        throw error;
      }
    }
  });
}

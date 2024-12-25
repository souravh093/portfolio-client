/* eslint-disable @typescript-eslint/no-explicit-any */
import { addProject, deleteProject, getProject, updateProject } from "@/services/project";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "./use-toast";

export const useAddProject = () => {
  return useMutation({
    mutationKey: ["projects"],
    mutationFn: async (projectData: FieldValues) => {
      return await addProject(projectData);
    },
    onSuccess: () => {
      toast({
        title: "Project added",
        description: "Project has been added successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Add Project failed",
        description: error,
        variant: "destructive",
      });
    },
  });
};

export const useDeleteProject = () => {
  return useMutation({
    mutationKey: ["projects"],
    mutationFn: async (id: string) => {
      return await deleteProject(id);
    },
    onSuccess: () => {
      toast({
        title: "Project deleted",
        description: "Project has been deleted successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Delete Project failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useUpdateProject = () => {
  return useMutation({
    mutationKey: ["projects"],
    mutationFn: async (data: { id: string; projectData: FieldValues }) => {
      return await updateProject(data.id, data.projectData);
    },
    onSuccess: () => {
      toast({
        title: "Project updated",
        description: "Project has been updated successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Update Project failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useGetProject = (id: string) => {
  return useQuery({
    queryKey: ["projects", id],
    queryFn: async () => {
      return await getProject(id);
    },
  });
};

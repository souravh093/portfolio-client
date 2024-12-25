/* eslint-disable @typescript-eslint/no-explicit-any */
import { addBlog, deleteBlog, getBlog, updateBlog } from "@/services/blog";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "./use-toast";

export const useAddBlog = () => {
  return useMutation({
    mutationKey: ["blogs"],
    mutationFn: async (blogData: FieldValues) => {
      return await addBlog(blogData);
    },
    onSuccess: () => {
      toast({
        title: "Blog added",
        description: "Blog has been added successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Add blog failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useDeleteBlog = () => {
  return useMutation({
    mutationKey: ["blogs"],
    mutationFn: async (id: string) => {
      return await deleteBlog(id);
    },
    onSuccess: () => {
      toast({
        title: "Blog deleted",
        description: "Blog has been deleted successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Delete blog failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useUpdateBlog = () => {
  return useMutation({
    mutationKey: ["blogs"],
    mutationFn: async (data: { id: string; blogData: FieldValues }) => {
      return await updateBlog(data.id, data.blogData);
    },
    onSuccess: () => {
      toast({
        title: "Blog updated",
        description: "Blog has been updated successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Update blog failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useGetBlog = (id: string) => {
  return useQuery({
    queryKey: ["blogs", id],
    queryFn: async () => {
      try {
        return await getBlog(id);
      } catch (error: any) {
        toast({
          title: "Get blog failed",
          description: error.message,
          variant: "destructive",
        });
        throw error;
      }
    },
  });
};

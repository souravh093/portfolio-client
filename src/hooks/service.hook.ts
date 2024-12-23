/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddService, deleteService, getService, updateService } from "@/services/service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "./use-toast";
import { FieldValues } from "react-hook-form";

export const useAddService = () => {
  return useMutation({
    mutationKey: ["services"],
    mutationFn: async (serviceData: FieldValues) => {
      return await AddService(serviceData);
    },
    onSuccess: () => {
      toast({
        title: "Service added",
        description: "Service has been added successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Add Service failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useDeleteService = () => {
  return useMutation({
    mutationKey: ["services"],
    mutationFn: async (id: string) => {
      return await deleteService(id);
    },
    onSuccess: () => {
      toast({
        title: "Service deleted",
        description: "Service has been deleted successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Delete Service failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useUpdateService = () => {
  return useMutation({
    mutationKey: ["services"],
    mutationFn: async (data: { id: string; serviceData: FieldValues }) => {
      return await updateService(data.id, data.serviceData);
    },
    onSuccess: () => {
      toast({
        title: "Service updated",
        description: "Service has been updated successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Update Service failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

export const useGetService = (id: string) => {
  return useQuery({
    queryKey: ["service", id],
    queryFn: async () => {
      return await getService(id);
    },
  });
};

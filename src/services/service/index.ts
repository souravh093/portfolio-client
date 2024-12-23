"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const AddService = async (serviceData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/services", serviceData);
    revalidateTag("services");

    return data;
  } catch (error: any) {
    console.error("Add service error:", error.message);
    throw new Error(error?.response?.data?.message || "Add service failed");
  }
};

export const deleteService = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/services/${id}`);
    revalidateTag("services");

    return data;
  } catch (error: any) {
    console.error("Delete service error:", error.message);
    throw new Error(error?.response?.data?.message || "Delete service failed");
  }
};

export const updateService = async (id: string, serviceData: FieldValues) => {
  try {
    const { data } = await axiosInstance.put(`/services/${id}`, serviceData);
    revalidateTag("services");

    return data;
  } catch (error: any) {
    console.error("Update service error:", error.message);
    throw new Error(error?.response?.data?.message || "Update service failed");
  }
};

export const getServices = async () => {
  try {
    const { data } = await axiosInstance.get("/services", {
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    return data;
  } catch (error: any) {
    console.error("Get services error:", error.message);
    throw new Error(error?.response?.data?.message || "Get services failed");
  }
};

export const getService = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/services/${id}`);
    return data;
  } catch (error: any) {
    console.error("Get service error:", error.message);
    throw new Error(error?.response?.data?.message || "Get service failed");
  }
};

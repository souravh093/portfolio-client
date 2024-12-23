/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { toast } from "@/hooks/use-toast";
import { axiosInstance } from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const addEducation = async (educationData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/educations", educationData);

    revalidateTag("educations");

    return data;
  } catch (error: any) {
    console.error("Add education error:", error.message);
    throw new Error(error?.response?.data?.message || "Add education failed");
  }
};

export const deleteEducations = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/educations/${id}`);

    revalidateTag("educations");

    return data;
  } catch (error: any) {
    console.error("Delete education error:", error.message);
    throw new Error(
      error?.response?.data?.message || "Delete education failed"
    );
  }
};

export const updateEducation = async (
  id: string,
  educationData: FieldValues
) => {
  try {
    const { data } = await axiosInstance.put(
      `/educations/${id}`,
      educationData
    );

    revalidateTag("educations");

    return data;
  } catch (error: any) {
    console.error("Update education error:", error.message);
    throw new Error(
      error?.response?.data?.message || "Update education failed"
    );
  }
};

export const getEducations = async () => {
  try {
    const { data } = await axiosInstance.get("/educations", {
      headers: {
        "Cash-Control": "no-cache",
      },
    });

    return data;
  } catch (error: any) {
    console.error("Get educations error:", error.message);
    toast({
      title: "Error",
      description: error?.response?.data?.message || "Get educations failed",
    });
    throw new Error(error?.response?.data?.message || "Get educations failed");
  }
};

export const getEducation = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/educations/${id}`);

    return data;
  } catch (error: any) {
    console.error("Get education error:", error.message);
    throw new Error(error?.response?.data?.message || "Get education failed");
  }
};

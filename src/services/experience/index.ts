/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { axiosInstance } from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const addExperience = async (experienceData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/experiences", experienceData);

    revalidateTag("experiences");

    return data;
  } catch (error: any) {
    console.error("Add experience error:", error.message);
    throw new Error(error?.response?.data?.message || "Add experience failed");
  }
};

export const deleteExperience = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/experiences/${id}`);

    revalidateTag("experiences");

    return data;
  } catch (error: any) {
    console.error("Delete experience error:", error.message);
    throw new Error(
      error?.response?.data?.message || "Delete experience failed"
    );
  }
};

export const updateExperience = async (
  id: string,
  experienceData: FieldValues
) => {
  try {
    const { data } = await axiosInstance.put(
      `/experiences/${id}`,
      experienceData
    );

    revalidateTag("experiences");

    return data;
  } catch (error: any) {
    console.error("Update experience error:", error.message);
    throw new Error(
      error?.response?.data?.message || "Update experience failed"
    );
  }
};

export const getExperiences = async () => {
  try {
    const { data } = await axiosInstance.get("/experiences", {
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    return data;
  } catch (error: any) {
    console.error("Get experiences error:", error.message);
    throw new Error(error?.response?.data?.message || "Get experiences failed");
  }
};

export const getExperience = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/experiences/${id}`);

    return data;
  } catch (error: any) {
    console.error("Get experience error:", error.message);
    throw new Error(error?.response?.data?.message || "Get experience failed");
  }
};

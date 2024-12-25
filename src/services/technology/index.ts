/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { axiosInstance } from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const addTechnology = async (technologyData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/technologies", technologyData);

    revalidateTag("technologies");

    return data;
  } catch (error: any) {
    console.error("Add technology error:", error.message);
    throw new Error(error?.response?.data?.message || "Add technology failed");
  }
};

export const deleteTechnology = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/technologies/${id}`);

    revalidateTag("technologies");

    return data;
  } catch (error: any) {
    console.error("Delete technology error:", error.message);
    throw new Error(
      error?.response?.data?.message || "Delete technology failed"
    );
  }
};

export const getTechnologies = async () => {
  try {
    const { data } = await axiosInstance.get("/technologies", {
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    return data;
  } catch (error: any) {
    console.error("Get technologies error:", error.message);
    throw new Error(
      error?.response?.data?.message || "Get technologies failed"
    );
  }
};

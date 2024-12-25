"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const addProject = async (project: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/projects", project);

    revalidateTag("projects");
    return data;
  } catch (error: any) {
    console.log("Add project error:", error.message);
    throw new Error(error?.response?.data?.message || "Add project failed");
  }
};

export const deleteProject = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/projects/${id}`);

    revalidateTag("projects");
    return data;
  } catch (error: any) {
    console.log("Delete project error:", error.message);
    throw new Error(error?.response?.data?.message || "Delete project failed");
  }
};

export const updateProject = async (id: string, project: FieldValues) => {
  try {
    const { data } = await axiosInstance.put(`/projects/${id}`, project);

    revalidateTag("projects");
    return data;
  } catch (error: any) {
    console.log("Update project error:", error.message);
    throw new Error(error?.response?.data?.message || "Update project failed");
  }
};

export const getProjects = async () => {
  try {
    const { data } = await axiosInstance.get("/projects", {
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    return data;
  } catch (error: any) {
    console.log("Get projects error:", error.message);
    throw new Error(error?.response?.data?.message || "Get projects failed");
  }
};

export const getProject = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/projects/${id}`);

    return data;
  } catch (error: any) {
    console.log("Get project error:", error.message);
    throw new Error(error?.response?.data?.message || "Get project failed");
  }
};
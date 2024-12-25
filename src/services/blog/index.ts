"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const addBlog = async (blogData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/blogs", blogData);

    revalidateTag("blogs");

    return data;
  } catch (error: any) {
    console.log("Error adding blog", error.message);
    throw new Error(error?.response?.data?.message || "Get educations failed");
  }
};

export const deleteBlog = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/blogs/${id}`);

    revalidateTag("blogs");

    return data;
  } catch (error: any) {
    console.log("Error deleting blog", error.message);
    throw new Error(error?.response?.data?.message || "Delete blog failed");
  }
};

export const updateBlog = async (id: string, blogData: FieldValues) => {
  try {
    const { data } = await axiosInstance.put(`/blogs/${id}`, blogData);

    revalidateTag("blogs");

    return data;
  } catch (error: any) {
    console.log("Error updating blog", error.message);
    throw new Error(error?.response?.data?.message || "Update blog failed");
  }
};

export const getBlogs = async () => {
  try {
    const { data } = await axiosInstance.get("/blogs", {
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    return data;
  } catch (error: any) {
    console.log("Error getting blogs", error.message);
    throw new Error(error?.response?.data?.message || "Get blogs failed");
  }
};

export const getBlog = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/blogs/${id}`);

    return data;
  } catch (error: any) {
    console.log("Error getting blog", error.message);
    throw new Error(error?.response?.data?.message || "Get blog failed");
  }
};


/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { axiosInstance } from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const addContact = async (contactData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/contacts", contactData);

    revalidateTag("contact");

    return data;
  } catch (error: any) {
    console.error("Get contact error:", error.message);
    throw new Error(error?.response?.data?.message || "Get education failed");
  }
};

export const getContacts = async () => {
  try {
    const { data } = await axiosInstance.get("/contacts", {
      headers: {
        "Cache-Control": "no-cache",
      },
    });

    return data;
  } catch (error: any) {
    console.error("Get contacts error:", error.message);
    throw new Error(error?.response?.data?.message || "Get contacts failed");
  }
};

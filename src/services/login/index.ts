"use server";

import { axiosInstance } from "@/lib/axiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

/**
 * Handles user login by sending credentials to the backend.
 * On success, it stores access and refresh tokens in cookies.
 * 
 * @param loginData - User login data (email and password)
 * @returns The response from the login API
 */
export const loginUser = async (loginData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", loginData);

    if (data?.success) {
      const cookieStore = await cookies();
      cookieStore.set("accessToken", data?.token?.accessToken, {
        path: "/",
        httpOnly: true,
      });
      cookieStore.set("refreshToken", data?.token?.refreshToken, {
        path: "/",
        httpOnly: true,
      });
    }

    return data;
  } catch (error: any) {
    console.error("Login error:", error.message);
    throw new Error(error?.response?.data?.message || "Login failed");
  }
};

/**
 * Refreshes the access token using the refresh token.
 * 
 * @returns The response containing the new access token
 */
export const getNewAccessToken = async () => {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("refreshToken")?.value;

    if (!refreshToken) {
      throw new Error("Refresh token not found");
    }

    const { data } = await axiosInstance.post("/auth/refresh-token", {
      refreshToken,
    });

    if (data?.success) {
      cookieStore.set("accessToken", data?.accessToken, {
        path: "/",
        httpOnly: true,
      });
    }

    return data;
  } catch (error: any) {
    console.error("Token refresh error:", error.message);
    throw new Error(error?.response?.data?.message || "Token refresh failed");
  }
};

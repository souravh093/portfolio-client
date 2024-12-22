/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { axiosInstance } from "@/lib/axiosInstance";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode, JwtPayload } from "jwt-decode";
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

export const logoutUser = async () => {
  (await cookies()).delete("accessToken");
  (await cookies()).delete("refreshToken");
};

export interface CustomJwtPayload extends JwtPayload {
  id: string;
  email: string;
  role: string;
}

export const currentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  let decoded: CustomJwtPayload | null = null;

  if (accessToken) {
    decoded = jwtDecode<CustomJwtPayload>(accessToken);
  }

  return decoded;
};

export const getNewAccessToken = async () => {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("refreshToken")?.value;

    if (!refreshToken) {
      throw new Error("Refresh token not found");
    }

    const { data } = await axiosInstance.post("/auth/refresh-token");

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

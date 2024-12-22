"use client";

import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "@/context/user.provider";
import { Toaster } from "@/components/ui/toaster";

export interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        {children}
        <Toaster />
      </UserProvider>
    </QueryClientProvider>
  );
};

export default Provider;

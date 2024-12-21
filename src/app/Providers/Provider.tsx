"use client";

import { QueryClient } from '@tanstack/react-query'
import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query';

export interface ProviderProps {
    children: React.ReactNode;
}

const Provider = ({children}: ProviderProps) => {
    const queryClient = new QueryClient();
  return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
  )
}

export default Provider
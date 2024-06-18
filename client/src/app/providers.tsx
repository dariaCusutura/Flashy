"use client";
import { AuthProvider } from "@/AuthProvider";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import { SearchProvider } from "@/SearchProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SearchProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </SearchProvider>
    </AuthProvider>
  );
}

"use client";
import { AuthProvider } from "@/AuthProvider";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </AuthProvider>
  );
}

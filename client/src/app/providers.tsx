"use client";
import { AuthProvider } from "@/AuthProvider";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import { SearchProvider } from "@/SearchProvider";

interface ProvidersProps {
  children: React.ReactNode;
  mode: string; // Add mode as a prop
}

export function Providers({ children, mode }: ProvidersProps) {
  return (
    <AuthProvider>
      <SearchProvider mode={mode}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </SearchProvider>
    </AuthProvider>
  );
}

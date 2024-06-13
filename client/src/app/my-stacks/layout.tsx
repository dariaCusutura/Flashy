import { Colors } from "@/colors";
import { Box } from "@chakra-ui/react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      {children}
    </Box>
  );
}

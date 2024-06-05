import { Box } from "@chakra-ui/react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      bgImage={"./background.svg"}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      position="fixed"
      top={0}
      left={0}
      h="100vh"
      w="100vw"
      m={0}
      p={0}
      overflowY="auto"
    >
      {children}
    </Box>
  );
}

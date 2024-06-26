import { Box } from "@chakra-ui/react";

export default function CardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box>{children}</Box>;
}

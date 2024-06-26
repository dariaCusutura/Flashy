"use client";
import { Colors } from "@/colors";
import { Box, Text, VStack } from "@chakra-ui/react";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const page = ({ params }: { params: { stackName: string } }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const stackId = searchParams.get("stackId");
  return (
    <Box
      top={0}
      left={0}
      h="100vh"
      w="100vw"
      m={0}
      p={0}
      overflowY="auto"
      bg={Colors.background}
      width="100%"
      bgSize="cover"
      zIndex={1000}
    >
      <VStack
        width="100%"
        marginTop={"80px"}
        spacing={{ md: 10, lg: 10, base: 5 }}
        alignItems="flex-start"
        marginBottom={"30px"}
      >
        <Text>cardsss {pathname}</Text>
        <Text>searchParams {stackId}</Text>
      </VStack>
    </Box>
  );
};

export default page;

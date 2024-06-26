"use client";
import { Colors } from "@/colors";
import CardsGrid from "@/components/CardsPage/CardsGrid";
import FilterCardsButton from "@/components/CardsPage/FilterCardsButton";
import {
  Box,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";

const page = () => {
  const pathname = usePathname();
  const stackTitle = pathname.substring(pathname.lastIndexOf("/") + 1);
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
        <HStack spacing={5}>
          <IconButton
            aria-label="back"
            variant="ghost"
            _hover={{ bg: Colors.lightGray }}
            _active={{ bg: Colors.lightGray }}
            marginLeft={{ md: "50px", lg: "100px", xl: "100px", base: "25px" }}
            icon={<IoArrowBackSharp size={30} />}
          />
          <Heading
            color={Colors.text}
            fontWeight="normal"
            size={{ md: "lg", lg: "lg", xl: "xl", base: "lg" }}
          >
            {stackTitle}
          </Heading>
          <FilterCardsButton />
        </HStack>
        <CardsGrid />
      </VStack>
    </Box>
  );
};

export default page;

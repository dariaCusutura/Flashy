"use client";
import { Colors } from "@/colors";
import CardsGrid from "@/components/CardsPage/CardsGrid";
import FilterCardsButton from "@/components/CardsPage/FilterCardsButton";
import Pagination from "@/components/Pagination";
import useGetCards from "@/hooks/useGetCards";
import {
  Box,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";

const page = () => {
  const searchParams = useSearchParams();
  const stackId = searchParams.get("stackId");
  const [page, setPage] = useState<number>(1);
  const pathname = usePathname();
  const stackTitle = pathname.substring(pathname.lastIndexOf("/") + 1);
  const { getCards, cards, paginationInfo, loadingCards } = useGetCards();

  useEffect(() => {
    if (stackId) {
      getCards(stackId, page);
    }
  }, [page, stackId]);

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
        {paginationInfo.records_on_page == 0 && (
          <Text
            marginLeft={{ md: "100px", lg: "100px", xl: "100px", base: "50px" }}
            fontSize={{ md: "xl", lg: "xl", xl: "xl", base: "lg" }}
          >
            0 cards found
          </Text>
        )}
        <CardsGrid cards={cards} />
        <Pagination paginationInfo={paginationInfo} setPage={setPage} />
      </VStack>
    </Box>
  );
};

export default page;

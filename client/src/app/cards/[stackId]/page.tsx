"use client";
import { useSearch } from "@/SearchProvider";
import { Colors } from "@/colors";
import CardsGrid from "@/components/CardsPage/CardsGrid";
import BackButton from "@/components/CardsPage/BackButton";
import FilterCardsButton from "@/components/CardsPage/FilterCardsButton";
import Pagination from "@/components/Pagination";
import AddCardButton from "@/components/PlusFloatingButton";
import useGetCards from "@/hooks/useGetCards";
import {
  Box,
  HStack,
  Heading,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const stackId = searchParams.get("stackId");
  const [page, setPage] = useState<number>(1);
  const [resetPage, setResetPage] = useState<boolean>(false);
  const [labelFilter, setLabelFilter] = useState<string>("");
  const pathname = usePathname();
  const stackTitle = pathname.substring(pathname.lastIndexOf("/") + 1);
  const { getCards, cards, paginationInfo, loadingCards } = useGetCards();
  const { searchInput } = useSearch();

  // Set page to 1 and trigger resetPage flag when searchInput changes
  useEffect(() => {
    setPage(1);
    setResetPage(!resetPage);
  }, [searchInput]);

  useEffect(() => {
    if (stackId) {
      getCards(stackId, page, labelFilter.toLowerCase(), searchInput);
    }
  }, [page, stackId, resetPage, labelFilter]);

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
          <BackButton />
          <Heading
            color={Colors.text}
            fontWeight="normal"
            size={{ md: "lg", lg: "lg", xl: "xl", base: "lg" }}
          >
            {stackTitle}
          </Heading>
          <FilterCardsButton
            setLabelFilter={setLabelFilter}
            setPage={setPage}
            labelFilter={labelFilter}
          />
          {labelFilter && (
            <Tag bg={Colors.lightGray}>
              <TagLabel
                fontSize={{ xl: "xl", lg: "xl", md: "xl", base: "md" }}
                paddingBottom={1}
                paddingTop={1}
                paddingLeft={1}
              >
                {labelFilter}
              </TagLabel>
              <TagCloseButton
                onClick={() => {
                  setLabelFilter("");
                }}
              />
            </Tag>
          )}
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
        <AddCardButton mode="cards" stack={stackId ? stackId : "noStack"} />
      </VStack>
    </Box>
  );
};

export default page;

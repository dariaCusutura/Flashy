"use client";
import { useSearch } from "@/SearchProvider";
import { Colors } from "@/colors";
import AddStackButton from "@/components/StacksPage/AddStackButton";
import FilterStacksButton from "@/components/StacksPage/FilterStacksButton";
import StackGrid from "@/components/StacksPage/StackGrid";
import StackPagination from "@/components/StacksPage/StackPagination";
import useGetStacks from "@/hooks/useGetStacks";
import {
  Text,
  Box,
  VStack,
  Heading,
  HStack,
  IconButton,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { LuFilterX } from "react-icons/lu";

const page = () => {
  const [page, setPage] = useState<number>(1);
  const [savedFilter, setSavedFilter] = useState<boolean | undefined>(
    undefined
  );
  const [isChecked, setIsChecked] = useState(false);
  const { getStacks, stacks, paginationInfo, loadingStacks } = useGetStacks();
  const { searchInput } = useSearch();
  useEffect(() => {
    getStacks(page, savedFilter, searchInput);
  }, [page, searchInput, savedFilter]);

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
          <Heading
            color={Colors.text}
            fontWeight="normal"
            marginLeft={{ md: "100px", lg: "100px", xl: "700px", base: "50px" }}
            size={{ md: "lg", lg: "lg", xl: "xl", base: "lg" }}
          >
            My Stacks
          </Heading>
          <FilterStacksButton
            setSavedFilter={setSavedFilter}
            savedFilter={savedFilter}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
          {savedFilter && (
            <Tag bg={Colors.lightGray}>
              <TagLabel
                fontSize={{ xl: "xl", lg: "xl", md: "xl", base: "md" }}
                paddingBottom={1}
                paddingTop={1}
                paddingLeft={1}
              >
                Saved
              </TagLabel>
              <TagCloseButton
                onClick={() => {
                  setSavedFilter(undefined);
                  setIsChecked(false);
                }}
              />
            </Tag>
          )}
        </HStack>
        {paginationInfo.records_on_page === 0 && (
          <Text
            marginLeft={{ md: "100px", lg: "100px", xl: "100px", base: "50px" }}
            fontSize={{ md: "xl", lg: "xl", xl: "xl", base: "lg" }}
          >
            0 stacks found
          </Text>
        )}
        <StackGrid stacks={stacks} loadingStacks={loadingStacks} />
        <StackPagination paginationInfo={paginationInfo} setPage={setPage} />
        <AddStackButton />
      </VStack>
    </Box>
  );
};

export default page;

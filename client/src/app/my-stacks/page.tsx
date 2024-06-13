import { Colors } from "@/colors";
import AddStackButton from "@/components/StacksPage/AddStackButton";
import StackGrid from "@/components/StacksPage/StackGrid";
import StackPagination from "@/components/StacksPage/StackPagination";
import {
  Text,
  Box,
  VStack,
  Heading,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { LuFilter } from "react-icons/lu";
import { LuFilterX } from "react-icons/lu";

const page = () => {
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
          <IconButton
            aria-label="filter"
            icon={<LuFilter size={25} />}
            variant="ghost"
            _hover={{ bg: Colors.lightGray }}
            _active={{ bg: Colors.lightGray }}
          />
        </HStack>
        <StackGrid />
        <StackPagination />
        <AddStackButton />
      </VStack>
    </Box>
  );
};

export default page;

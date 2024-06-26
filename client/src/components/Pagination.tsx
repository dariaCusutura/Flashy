import { Colors } from "@/colors";
import { PaginationInfo } from "@/hooks/useGetCards";
import { Button, HStack } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  paginationInfo: PaginationInfo;
  setPage: Dispatch<SetStateAction<number>>;
}

const StackPagination = ({ paginationInfo, setPage }: Props) => {
  return (
    <HStack alignSelf={"center"}>
      <Button
        boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
        borderRadius={"0.8rem"}
        bg={Colors.lightGray}
        _hover={{ bg: "#C9C6C6" }}
        onClick={() => {
          setPage(paginationInfo.previous_page);
          window.scrollTo(0, 0);
        }}
        isDisabled={paginationInfo.current_page === 1 ? true : false}
        _disabled={{
          bg: Colors.lightGray,
          boxShadow: "3px 3px 2px 0 rgba(0,0,0,0.3)",
          cursor: "not-allowed",
          _hover: {
            bg: "#C9C6C6",
          },
        }}
      >
        Prev
      </Button>
      <Button
        boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
        borderRadius={"100%"}
        bg={Colors.lightGray}
        _hover={{ bg: "#C9C6C6" }}
      >
        {paginationInfo.current_page}
      </Button>
      <Button
        boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
        borderRadius={"0.8rem"}
        bg={Colors.lightGray}
        _hover={{ bg: "#C9C6C6" }}
        onClick={() => setPage(paginationInfo.next_page)}
        isDisabled={
          paginationInfo.current_page === paginationInfo.total_pages ||
          paginationInfo.total_pages === 0
            ? true
            : false
        }
        _disabled={{
          bg: Colors.lightGray,
          boxShadow: "3px 3px 2px 0 rgba(0,0,0,0.3)",
          cursor: "not-allowed",
          _hover: {
            bg: "#C9C6C6",
          },
        }}
      >
        Next
      </Button>
    </HStack>
  );
};

export default StackPagination;

import { Colors } from "@/colors";
import { Button, HStack } from "@chakra-ui/react";
import React from "react";

const StackPagination = () => {
  return (
    <HStack alignSelf={"center"}>
      <Button
        boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
        borderRadius={"0.8rem"}
        bg={Colors.lightGray}
        _hover={{ bg: "#C9C6C6" }}
      >
        Prev
      </Button>
      <Button
        boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
        borderRadius={"100%"}
        bg={Colors.lightGray}
        _hover={{ bg: "#C9C6C6" }}
      >
        1
      </Button>
      <Button
        boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
        borderRadius={"0.8rem"}
        bg={Colors.lightGray}
        _hover={{ bg: "#C9C6C6" }}
      >
        Next
      </Button>
    </HStack>
  );
};

export default StackPagination;

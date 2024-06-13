import { Colors } from "@/colors";
import { IconButton, Tooltip } from "@chakra-ui/react";
import React from "react";
import { FiPlus } from "react-icons/fi";

const AddStackButton = () => {
  return (
    <Tooltip
      hasArrow
      label="Add a new stack"
      aria-label="newStack"
      placement="bottom-start"
      bg={Colors.lightGray}
      color={Colors.darkGray}
    >
      <IconButton
        aria-label="addStack"
        icon={<FiPlus size={25} color={Colors.background} />}
        borderRadius={"100%"}
        alignSelf={"flex-end"}
        bg={Colors.orange}
        _hover={{ bg: "#A94402" }}
        boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
        marginRight={"20px"}
        size={"lg"}
        position="fixed"
        bottom={{ lg: "50px", md: "30px", base: "10px" }}
        right={{ lg: "30px", md: "20px", base: "0" }}
      />
    </Tooltip>
  );
};

export default AddStackButton;

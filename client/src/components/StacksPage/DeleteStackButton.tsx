import { Colors } from "@/colors";
import { MenuItem } from "@chakra-ui/react";
import React from "react";

const DeleteStackButton = () => {
  return (
    <MenuItem bg={Colors.background} _hover={{ bg: Colors.lightGray }}>
      Delete stack
    </MenuItem>
  );
};

export default DeleteStackButton;

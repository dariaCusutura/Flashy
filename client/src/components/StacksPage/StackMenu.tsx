import { Colors } from "@/colors";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import DeleteStackButton from "./DeleteStackButton";

const StackMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<BsThreeDotsVertical size={20} />}
        variant="ghost"
        size={"sm"}
        _hover={{ bg: Colors.lightGray }}
        _active={{ bg: Colors.lightGray }}
        marginRight={-3}
      />
      <MenuList
        bg={Colors.background}
        boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
      >
        <MenuItem bg={Colors.background} _hover={{ bg: Colors.lightGray }}>
          Edit title
        </MenuItem>
        <DeleteStackButton />
      </MenuList>
    </Menu>
  );
};

export default StackMenu;

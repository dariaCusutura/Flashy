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
import EditTitleButton from "./EditTitleButton";

interface Props {
  stackId: string;
  stackTitle: string;
}

const StackMenu = ({ stackId, stackTitle }: Props) => {
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
        <EditTitleButton stackTitle={stackTitle} stackId={stackId} />
        <DeleteStackButton stackId={stackId} />
      </MenuList>
    </Menu>
  );
};

export default StackMenu;

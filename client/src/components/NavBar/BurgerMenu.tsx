import { Colors } from "@/colors";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const BurgerMenu = () => {
  return (
    <Menu offset={[0, 10]}>
      <MenuButton
        as={IconButton}
        variant="ghost"
        _hover={{ bg: Colors.lightGray }}
        _active={{ bg: "transparent" }}
        marginRight={{ lg: 10, md: 10, base: -2 }}
        marginLeft={"7px"}
        icon={<RxHamburgerMenu size={25} />}
      />
      <MenuList bg={Colors.background}>
        <MenuItem bg={Colors.background} _hover={{ bg: Colors.lightGray }}>
          My Account
        </MenuItem>
        <MenuItem bg={Colors.background} _hover={{ bg: Colors.lightGray }}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default BurgerMenu;

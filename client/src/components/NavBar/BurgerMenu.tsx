import { AuthContext } from "@/AuthProvider";
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
import React, { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MyAccountButton from "./MyAccountButton";

const BurgerMenu = () => {
  const { logout } = useContext(AuthContext);

  const manageLogoutClick = () => {
    logout();
  };

  return (
    <Menu offset={[0, 10]}>
      <MenuButton
        as={IconButton}
        variant="ghost"
        _hover={{ bg: Colors.lightGray }}
        _active={{ bg: Colors.lightGray }}
        marginRight={{ lg: 10, md: 10, base: -2 }}
        marginLeft={"7px"}
        icon={<RxHamburgerMenu size={25} />}
      />
      <MenuList
        bg={Colors.background}
        boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
      >
        <MyAccountButton />
        <MenuItem
          bg={Colors.background}
          _hover={{ bg: Colors.lightGray }}
          onClick={manageLogoutClick}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default BurgerMenu;

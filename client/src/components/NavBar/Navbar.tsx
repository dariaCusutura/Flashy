"use client";
import { Colors } from "@/colors";
import { Routes } from "@/routes";
import { Box, Button, Flex, Image, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import BurgerMenu from "./BurgerMenu";

interface Props {
  mode: string;
}

const Navbar = ({ mode }: Props) => {
  return (
    <Box
      px={4}
      py={2}
      position="fixed"
      top={0}
      width="100%"
      zIndex={1000}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.3)"
      bg={mode === "stacks" ? Colors.background : undefined}
    >
      <Flex alignItems="center" h={10} justifyContent="space-between">
        <Button
          variant="ghost"
          _hover={{ bg: "transparent" }}
          marginLeft={{ lg: 10, md: 10, base: -4 }}
        >
          {mode !== "home" && (
            <Image
              src={
                mode === "signup" || mode === "login"
                  ? "./darkLogo.png"
                  : "./lightLogo.png"
              }
              alt="logo"
              boxSize={{ lg: 150, md: 150, base: 200 }} // Set responsive size
              objectFit="contain"
            />
          )}
        </Button>
        <SearchBar mode={mode} />
        {mode === "stacks" && <BurgerMenu />}
        {mode === "home" && (
          <Stack direction="row" marginRight={"10px"}>
            <Button
              as={Link}
              href={Routes.LOGIN}
              bg={"#D7D7D7"}
              border="2px"
              borderColor={"#7C7C7C"}
              color={"#7C7C7C"}
              height={35}
              width={85}
              borderRadius={"0.8rem"}
              boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
            >
              Login
            </Button>
            <Button
              as={Link}
              href={Routes.SIGNUP}
              height={35}
              width={85}
              borderRadius={"0.8rem"}
              bg={"#BA4A00"}
              border="2px"
              borderColor={"#BA4A00"}
              color={"#EEEEEE"}
              _hover={{ bg: "#A94402" }}
              boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
            >
              Sign Up
            </Button>
          </Stack>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;

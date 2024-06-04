"use client";
import { Box, Button, Flex, Image, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {
  mode?: string;
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
    >
      <Flex alignItems="center" h={10} justifyContent="space-between">
        <Button
          variant="ghost"
          as={Link}
          href={"/"}
          _hover={{ bg: "transparent" }}
        >
          {mode === "signup" || mode === "login" || mode === "home" ? (
            <Image
              src="./darkLogo.png"
              alt="logo"
              width={{ lg: 150, md: 150, base: 130 }}
            />
          ) : (
            <Image
              src="./lightLogo.png"
              alt="logo"
              width={{ lg: 150, md: 150, base: 100 }}
            />
          )}
        </Button>
        {mode === "home" && (
          <Stack direction="row" marginRight={"10px"}>
            <Button
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

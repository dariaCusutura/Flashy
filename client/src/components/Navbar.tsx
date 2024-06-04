import { Box, Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Box bg={"blue.500"} px={4} py={2}>
      <Flex alignItems="center" justifyContent="space-between">
        <Button variant="ghost" as={Link} href={"/"}>
          <Image src="./lightLogo.png" alt="logo" width={150} />
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;

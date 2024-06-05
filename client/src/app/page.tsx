"use client";

import { Routes } from "@/routes";
import { Box, Button, Heading, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      bgImage={"./background.svg"}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      position="fixed"
      top={0}
      left={0}
      h="100vh"
      w="100vw"
      m={0}
      p={0}
      overflowY="auto"
    >
      <VStack
        spacing={{ lg: "59px", md: "50px", base: "40px" }}
        marginTop={"100px"}
      >
        <Heading
          textAlign="center"
          fontSize={{ lg: "50px", md: "40px", base: "35px" }}
        >
          Welcome to
        </Heading>
        <Image
          src="./lightLogo.png"
          alt="logo"
          width={{ lg: 300, md: 250, base: 200 }}
        />
        <Heading
          paddingEnd={5}
          paddingStart={5}
          textAlign="center"
          color={"#7C7C7C"}
          fontSize={{ lg: "35px", md: "30px", base: "25px" }}
        >
          Boost your study sessions with an app that allows
          <br /> you to create, edit and review your custom <br />
          flashcards{" "}
        </Heading>
        <Button
          as={Link}
          href={Routes.LOGIN}
          size={{ lg: "3xl", md: "3xl", base: "xl" }}
          padding={{ lg: "1rem 3rem", md: "1rem 3rem", base: "0.5rem 1rem" }}
          marginTop={8}
          marginBottom={5}
          fontSize={"3xl"}
          borderRadius={"0.9rem"}
          bg={"#BA4A00"}
          border="2px"
          borderColor={"#BA4A00"}
          color={"#EEEEEE"}
          _hover={{ bg: "#A94402" }}
          boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
        >
          Get Started
        </Button>
      </VStack>
    </Box>
  );
}

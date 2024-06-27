"use client";
import { Colors } from "@/colors";
import React from "react";
import { IconButton } from "@chakra-ui/react";
import NextLink from "next/link";
import { MdArrowBack } from "react-icons/md";
import { Routes } from "@/routes";

const BackButton = () => {
  return (
    <IconButton
      as={NextLink}
      icon={<MdArrowBack size={30} />}
      href={Routes.MY_STACKS}
      aria-label="back"
      variant="ghost"
      _hover={{ bg: Colors.lightGray }}
      _active={{ bg: Colors.lightGray }}
      marginLeft={{ md: "50px", lg: "100px", xl: "100px", base: "25px" }}
    />
  );
};

export default BackButton;

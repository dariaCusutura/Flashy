"use client";
import { Colors } from "@/colors";
import { Stack } from "@/hooks/useGetStacks";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  IconButton,
  Text,
  HStack,
  GridItem,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import StackMenu from "./StackMenu";
import useUpdateStack from "@/hooks/useUpdateStack";
import { useRouter } from "next/navigation";
import { Routes } from "@/routes";

interface Props {
  stack: Stack;
  loadingStacks: boolean;
}

const StackCard = ({ stack, loadingStacks }: Props) => {
  const [saved, setSaved] = useState<boolean>(stack.saved);
  const updateStack = useUpdateStack();
  const router = useRouter();

  useEffect(() => {
    setSaved(stack.saved);
  }, [stack]);

  const manageSaveButton = async () => {
    const newSavedState = !saved;
    setSaved(newSavedState);
    await updateStack(stack._id, undefined, newSavedState);
  };

  const handleCardsClick = () => {
    router.push(Routes.STACK_CARDS(stack.title) + `/?stackId=${stack._id}`);
  };

  return (
    <GridItem>
      <Card
        _hover={{
          boxShadow: "0.5px 0.5px 7px 0 rgba(0,0,0,0.5)",
          transition: "0.7s",
        }}
        bg={Colors.background}
        width="fit-content"
        boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
      >
        <CardHeader paddingBottom={0}>
          <HStack width="100%" justifyContent="space-between">
            <Heading
              size={{ xl: "lg", lg: "md", md: "md", base: "md" }}
              isTruncated
              maxW={{ xl: "300px", lg: "250px", md: "200px", base: "150px" }}
              whiteSpace="normal"
            >
              {stack.title}
            </Heading>
            <StackMenu stack={stack} />
          </HStack>
        </CardHeader>
        <CardBody paddingTop={0}>
          <Text
            color={Colors.darkGray}
            fontSize={{ xl: "lg", lg: "md", md: "md", base: "md" }}
          >
            CARDS: {stack.cardsNumber}
          </Text>
        </CardBody>
        <CardFooter marginTop={{ lg: "1px", xl: "20px" }}>
          <HStack>
            <Button
              size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
              borderRadius={"0.8rem"}
              bg={"#BA4A00"}
              border="2px"
              borderColor={"#BA4A00"}
              color={"#EEEEEE"}
              _hover={{ bg: "#A94402" }}
              boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
            >
              Start
            </Button>
            <Button
              size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
              borderRadius={"0.8rem"}
              bg={"#BA4A00"}
              border="2px"
              borderColor={"#BA4A00"}
              color={"#EEEEEE"}
              _hover={{ bg: "#A94402" }}
              boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              onClick={handleCardsClick}
            >
              Edit Cards
            </Button>
            <IconButton
              marginLeft={{
                md: "30px",
                lg: "40px",
                xl: "70px",
                base: "50px",
              }}
              marginRight={-3}
              aria-label="saveStack"
              icon={
                saved ? (
                  <IoBookmark size={25} />
                ) : (
                  <IoBookmarkOutline size={25} />
                )
              }
              variant="ghost"
              size={"sm"}
              _hover={{ bg: Colors.background }}
              _active={{ bg: Colors.background }}
              onClick={manageSaveButton}
            />
          </HStack>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default StackCard;

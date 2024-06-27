"use client";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  HStack,
  GridItem,
} from "@chakra-ui/react";
import { Colors } from "@/colors";
import Label from "@/components/CardsPage/Label";
import { Flashcard } from "@/hooks/useGetCards";
import DeleteButton from "../DeleteButton";

interface Props {
  card: Flashcard;
}

const FlashCard = ({ card }: Props) => {
  return (
    <>
      <GridItem width="100%">
        <Card
          _hover={{
            boxShadow: "0.5px 0.5px 7px 0 rgba(0,0,0,0.5)",
            transition: "0.7s",
          }}
          bg={Colors.background}
          width="100%"
          boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
        >
          <CardHeader paddingBottom={0}>
            <Heading
              size={{ xl: "lg", lg: "md", md: "md", base: "md" }}
              isTruncated
              whiteSpace="normal"
            >
              {card.question}
            </Heading>
          </CardHeader>
          <CardBody paddingTop={3}>
            <Text
              color={Colors.darkGray}
              fontSize={{ xl: "2xl", lg: "xl", md: "lg", base: "lg" }}
            >
              {card.answer}
            </Text>
            <Label label={card.label} />
          </CardBody>
          <CardFooter marginTop={{ lg: "1px", xl: "20px" }}>
            <HStack width={"100%"}>
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
                Edit
              </Button>
              <DeleteButton id={card._id} mode="card" />
            </HStack>
          </CardFooter>
        </Card>
      </GridItem>
    </>
  );
};

export default FlashCard;

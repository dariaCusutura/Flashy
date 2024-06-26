"use client";
import { Grid } from "@chakra-ui/react";
import React from "react";
import FlashCard from "./FlashCard";
import { Flashcard } from "@/hooks/useGetCards";

interface Props {
  cards: Flashcard[];
}

const CardsGrid = ({ cards }: Props) => {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns={{
        lg: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        sm: "repeat(1, 1fr)",
      }}
      gap={{ xl: "50px", lg: 10, md: "50px", base: "30px" }}
      alignSelf="center"
      width="90%"
    >
      {cards.map((card, index) => (
        <FlashCard card={card} key={index} />
      ))}
    </Grid>
  );
};

export default CardsGrid;

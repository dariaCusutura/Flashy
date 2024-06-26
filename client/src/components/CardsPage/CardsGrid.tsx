import { Grid } from "@chakra-ui/react";
import React from "react";
import FlashCard from "./FlashCard";

const CardsGrid = () => {
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
      <FlashCard />
    </Grid>
  );
};

export default CardsGrid;

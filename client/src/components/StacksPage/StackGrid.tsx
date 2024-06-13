import { Grid, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import StackCard from "./StackCard";

const StackGrid = () => {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns={{
        lg: "repeat(3, 1fr)",
        md: "repeat(2, 1fr)",
        sm: "repeat(1, 1fr)",
      }}
      gap={{ xl: "50px", lg: 10, md: "50px", base: "30px" }}
      alignSelf="center"
    >
      <StackCard />
    </Grid>
  );
};

export default StackGrid;

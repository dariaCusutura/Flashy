import { Grid, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import StackCard from "./StackCard";

const StackGrid = () => {
  return (
    <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(3, 1fr)" gap={10} alignSelf="center">
      <StackCard />
    </Grid>
  );
};

export default StackGrid;

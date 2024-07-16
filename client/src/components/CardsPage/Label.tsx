"use client";
import React from "react";
import { Badge } from "@chakra-ui/react";

interface Props {
  label: string;
}

const Label = ({ label }: Props) => {
  let colorScheme = "red";
  if (label == "medium") colorScheme = "purple";
  else if (label == "easy") colorScheme = "green";
  return (
    <Badge
      marginTop={2}
      colorScheme={colorScheme}
      fontSize={{ xl: "md", lg: "md", md: "sm", base: "sm" }}
      borderRadius={"0.2rem"}
    >
      {label}
    </Badge>
  );
};

export default Label;

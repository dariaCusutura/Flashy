import { useSearch } from "@/SearchProvider";
import { Colors } from "@/colors";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

interface Props {
  mode: string;
}

const SearchBar = ({ mode }: Props) => {
  const { setSearchInput } = useSearch();
  return (
    mode === "stacks" && (
      <InputGroup>
        <InputLeftElement
          paddingLeft="0.5rem"
          children={<IoSearch color={Colors.text} size={20} />}
        />
        <Input
          id="search"
          placeholder={
            mode === "stacks" ? "Search a stack..." : "Search a card..."
          }
          _placeholder={{ color: Colors.text }}
          color={Colors.text}
          variant={"filled"}
          boxShadow="2px 2px 5px 0 rgba(0,0,0,0.4)"
          _hover={{
            boxShadow: "2px 2px 5px 0 rgba(0,0,0,0.7)",
            transition: "0.7s",
          }}
          borderRadius={"0.9rem"}
          bg={Colors.background}
          _focus={{
            borderColor: "transparent",
            boxShadow: "2px 2px 5px 0 rgba(0,0,0,0.7)",
          }}
          onChange={(e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
          }}
        />
      </InputGroup>
    )
  );
};

export default SearchBar;

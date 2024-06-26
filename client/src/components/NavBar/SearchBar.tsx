import { useSearch } from "@/SearchProvider";
import { Colors } from "@/colors";
import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
  mode: string;
}

const SearchBar = ({ mode }: Props) => {
  const { searchInput, setSearchInput } = useSearch();
  const [preSearchInput, setPreSearchInput] = useState<string>("");
  const manageSearchBarButton = () => {
    if (searchInput === preSearchInput && preSearchInput !== "") {
      setSearchInput("");
      setPreSearchInput("");
    } else setSearchInput(preSearchInput);
  };
  return (
    (mode === "stacks" || mode === "cards") && (
      <InputGroup>
        <Input
          id="search"
          name="searchBar"
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
          value={preSearchInput}
          onChange={(e) => {
            e.preventDefault();
            setPreSearchInput(e.target.value);
          }}
        />
        <InputRightElement>
          <IconButton
            bg={Colors.lightGray}
            borderRightRadius={"0.9rem"}
            borderLeftRadius={0}
            aria-label="button"
            icon={
              searchInput === preSearchInput && preSearchInput !== "" ? (
                <IoCloseSharp size={22} />
              ) : (
                <IoSearch color={Colors.text} size={22} />
              )
            }
            onClick={manageSearchBarButton}
          />
        </InputRightElement>
      </InputGroup>
    )
  );
};

export default SearchBar;

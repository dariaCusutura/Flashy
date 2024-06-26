import { Colors } from "@/colors";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { LuFilter } from "react-icons/lu";

const FilterCardsButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="filter"
        icon={<LuFilter size={25} />}
        variant="ghost"
        _hover={{ bg: Colors.lightGray }}
        _active={{ bg: Colors.lightGray }}
        onClick={onOpen}
      />
    </>
  );
};

export default FilterCardsButton;

"use client";
import { Colors } from "@/colors";
import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  useDisclosure,
  HStack,
  Checkbox,
  VStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { LuFilter } from "react-icons/lu";

interface Props {
  setSavedFilter: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  savedFilter: boolean | undefined;
  isChecked: boolean;
}

const FilterStacksButton = ({
  setPage,
  setSavedFilter,
  savedFilter,
  isChecked,
  setIsChecked,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState<string>("");

  const manageFilterButtonClick = () => {
    if (isChecked) {
      setSavedFilter(isChecked);
      setPage(1);
      onClose();
    } else setError("Select filters");
  };

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

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setError("");
          setIsChecked(false);
        }}
      >
        <ModalOverlay />
        <ModalContent
          borderRadius={"0.9rem"}
          overflow="hidden"
          marginLeft={7}
          marginRight={7}
        >
          <ModalHeader color={Colors.text} bg={Colors.background}>
            Filter Stacks
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={Colors.background}>
            <VStack align={"flex-start"}>
              <Checkbox
                color={Colors.text}
                iconColor={Colors.background}
                size="lg"
                sx={{
                  ".chakra-checkbox__control": {
                    borderColor: Colors.darkGray,
                  },
                  ".chakra-checkbox__control[data-checked]": {
                    bg: Colors.orange,
                    borderColor: Colors.orange,
                    size: "lg",
                  },
                  ".chakra-checkbox__control:hover[data-checked] .chakra-checkbox__icon":
                    {
                      bg: Colors.orange,
                    },
                }}
                isChecked={savedFilter}
                onChange={(e) => {
                  setIsChecked(e.target.checked);
                  setError("");
                }}
              >
                Saved Stacks
              </Checkbox>
              {error && (
                <Text
                  color={"red"}
                  marginTop={3}
                  marginBottom={-3}
                  fontSize={"lg"}
                >
                  {error}
                </Text>
              )}
            </VStack>
          </ModalBody>
          <ModalFooter bg={Colors.background}>
            <Button
              borderRadius={"0.9rem"}
              bg={"#BA4A00"}
              border="2px"
              borderColor={"#BA4A00"}
              color={"#EEEEEE"}
              _hover={{ bg: "#A94402" }}
              boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              onClick={manageFilterButtonClick}
            >
              Filter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterStacksButton;

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
  setLabelFilter: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  labelFilter: string;
}

const FilterCardsButton = ({ setLabelFilter, setPage, labelFilter }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [error, setError] = useState<string>("");
  const [selectedLabel, setSelectedLabel] = useState<string>("");

  const handleCheckboxChange = (label: string) => {
    setSelectedLabel(label === selectedLabel ? "" : label);
    setError("");
  };

  const handleFilterButtonClick = () => {
    if (selectedLabel) {
      setLabelFilter(selectedLabel);
      setPage(1);
      onClose();
      setSelectedLabel("");
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
          setSelectedLabel("");
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
            Filter Cards
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={Colors.background}>
            <VStack align={"flex-start"}>
              {["Easy", "Medium", "Hard"].map((label) => (
                <Checkbox
                  key={label}
                  color={Colors.text}
                  iconColor={Colors.background}
                  size="lg"
                  isChecked={selectedLabel === label}
                  onChange={() => handleCheckboxChange(label)}
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
                >
                  {label}
                </Checkbox>
              ))}
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
              onClick={handleFilterButtonClick}
            >
              Filter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterCardsButton;

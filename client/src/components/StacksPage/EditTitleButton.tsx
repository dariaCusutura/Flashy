"use client";
import { Colors } from "@/colors";
import { Stack } from "@/hooks/useGetStacks";
import useUpdateStack from "@/hooks/useUpdateStack";
import {
  MenuItem,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface Props {
  stack: Stack;
}

const EditTitleButton = ({ stack }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState<string>(stack.title);
  const [error, setError] = useState<string>("");
  const updateStack = useUpdateStack();
  const manageSave = async () => {
    const error = await updateStack(stack._id, title);
    if (error) setError(error);
    else {
      window.location.reload();
    }
  };

  return (
    <>
      <MenuItem
        bg={Colors.background}
        _hover={{ bg: Colors.lightGray }}
        onClick={() => {
          onOpen();
          setTitle(stack.title);
        }}
      >
        Edit title
      </MenuItem>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setError("");
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
            Edit title
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={Colors.background}>
            <VStack>
              <Input
                id="title"
                name="editTitle"
                value={title}
                borderRadius={"0.9rem"}
                borderColor={Colors.darkGray}
                variant={"outline"}
                onChange={(e) => {
                  e.preventDefault();
                  setTitle(e.target.value);
                }}
              />
              {error && (
                <Text
                  color={"red"}
                  marginTop={3}
                  marginBottom={-3}
                  textAlign={"left"}
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
              onClick={manageSave}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditTitleButton;

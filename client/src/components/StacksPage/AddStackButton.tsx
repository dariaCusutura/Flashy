import { Colors } from "@/colors";
import useAddStack from "@/hooks/useAddStack";
import {
  IconButton,
  Tooltip,
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
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const AddStackButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string>("");
  const addStack = useAddStack(title);

  const manageAddStackButton = async () => {
    const error = await addStack();
    if (error) setError(error);
    else {
      window.location.reload();
    }
  };

  return (
    <>
      <Tooltip
        hasArrow
        label="Add a new stack"
        aria-label="newStack"
        placement="bottom-start"
        bg={Colors.lightGray}
        color={Colors.darkGray}
      >
        <IconButton
          aria-label="addStack"
          icon={<FiPlus size={25} color={Colors.background} />}
          borderRadius={"100%"}
          alignSelf={"flex-end"}
          bg={Colors.orange}
          _hover={{ bg: "#A94402" }}
          boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
          marginRight={"20px"}
          size={"lg"}
          position="fixed"
          bottom={{ lg: "50px", md: "30px", base: "10px" }}
          right={{ lg: "30px", md: "20px", base: "0" }}
          onClick={onOpen}
        />
      </Tooltip>

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
            Add new stack
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={Colors.background}>
            <VStack>
              <Heading
                color={Colors.text}
                fontWeight="normal"
                size={"md"}
                alignSelf={"flex-start"}
              >
                Stack Title
              </Heading>
              <Input
                id="title"
                borderRadius={"0.9rem"}
                borderColor={Colors.darkGray}
                variant={"outline"}
                onChange={(e) => {
                  e.preventDefault();
                  setTitle(e.target.value);
                }}
              />
              {error && (
                <Text color={"red"} marginTop={1} marginBottom={-2} textAlign={"left"}>
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
              onClick={manageAddStackButton}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddStackButton;

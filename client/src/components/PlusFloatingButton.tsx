"use client";
import { Colors } from "@/colors";
import useAddCard from "@/hooks/useAddCard";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { LuChevronDown } from "react-icons/lu";

interface Props {
  mode: string;
  stack: string;
}

const AddStackButton = ({ mode, stack }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [error, setError] = useState<string>("");
  const addStack = useAddStack(title);
  const addCard = useAddCard(question, answer, stack, label);

  const handleSaveButton = async () => {
    const error = mode === "stacks" ? await addStack() : await addCard();
    if (error) {
      setError(error);
    } else {
      window.location.reload();
    }
  };

  const handleLabelChange = (label: string) => {
    if (label == "None") setLabel("");
    else setLabel(label.toLowerCase());
  };

  const renderModalContent = () => {
    if (mode === "stacks") {
      return (
        <>
          <Heading
            color={Colors.text}
            fontWeight="normal"
            size={"md"}
            alignSelf={"flex-start"}
          >
            Stack Title
          </Heading>
          <Input
            name="title"
            borderRadius={"0.9rem"}
            borderColor={Colors.darkGray}
            variant={"outline"}
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
          />
        </>
      );
    } else {
      return (
        <>
          <Heading
            color={Colors.text}
            fontWeight="normal"
            size={"md"}
            alignSelf={"flex-start"}
          >
            Question
          </Heading>
          <Input
            name="question"
            borderRadius={"0.9rem"}
            borderColor={Colors.darkGray}
            variant={"outline"}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
          <Heading
            color={Colors.text}
            fontWeight="normal"
            size={"md"}
            alignSelf={"flex-start"}
          >
            Answer
          </Heading>
          <Input
            name="answer"
            borderRadius={"0.9rem"}
            borderColor={Colors.darkGray}
            variant={"outline"}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          />
          <Menu>
            <MenuButton
              marginTop={2}
              as={Button}
              rightIcon={label ? undefined : <LuChevronDown size={20} />}
              _hover={{ bg: "#CFCBCB" }}
              alignSelf={"flex-start"}
              bg={Colors.lightGray}
              borderRadius={"0.9rem"}
              fontSize={"lg"}
              fontWeight={"none"}
            >
              {label ? `Label: ${label}` : "Label"}
            </MenuButton>
            <MenuList
              bg={Colors.background}
              boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
            >
              {["Easy", "Medium", "Hard", "None"].map((label) => (
                <MenuItem
                  key={label}
                  bg={Colors.background}
                  _hover={{ bg: Colors.lightGray }}
                  onClick={() => handleLabelChange(label)}
                >
                  {label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </>
      );
    }
  };

  return (
    <>
      <Tooltip
        hasArrow
        label={mode == "stacks" ? "Add a new stack" : "Add a new card"}
        aria-label="plus"
        placement="bottom-start"
        bg={Colors.lightGray}
        color={Colors.darkGray}
      >
        <IconButton
          aria-label="add"
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
          setTitle("");
          setQuestion("");
          setAnswer("");
          setLabel("");
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
            {mode == "stacks" ? "Add new stack" : "Add a new card"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={Colors.background}>
            <VStack>
              {renderModalContent()}
              {error && (
                <Text
                  color={"red"}
                  marginTop={1}
                  marginBottom={-2}
                  textAlign={"left"}
                >
                  {Array.isArray(error) ? error[0] : error}
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
              onClick={handleSaveButton}
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

"use client";
import { Colors } from "@/colors";
import { Stack } from "@/hooks/useGetStacks";
import {
  Button,
  Card,
  Text,
  CardBody,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

interface Props {
  stack: Stack;
}

const StartButton = ({ stack }: Props) => {
  const [questionNr, setQuestionNr] = useState<number>(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isBase] = useMediaQuery("(max-width: 766px)");

  const backButton = () => {
    return (
      <>
        <IconButton
          aria-label="back"
          boxShadow={"1px 1px 1px 0 rgba(0,0,0,0.3)"}
          borderRadius={"100%"}
          bg={Colors.lightGray}
          _hover={{ bg: "#C9C6C6" }}
          icon={<IoMdArrowBack size={30} />}
          isDisabled={questionNr === 1}
          onClick={() => {
            if (questionNr !== 1) setQuestionNr(questionNr - 1);
          }}
        />
      </>
    );
  };

  const nextButton = () => {
    return (
      <>
        <IconButton
          aria-label="back"
          boxShadow={"1px 1px 1px 0 rgba(0,0,0,0.3)"}
          borderRadius={"100%"}
          bg={Colors.lightGray}
          _hover={{ bg: "#C9C6C6" }}
          icon={<IoMdArrowForward size={30} />}
          isDisabled={questionNr === stack.cardsNumber}
          onClick={() => {
            if (questionNr !== stack.cardsNumber) setQuestionNr(questionNr + 1);
          }}
        />
      </>
    );
  };

  const handleStartClick = () => {
    if (stack.cardsNumber === 0) {
      toast.error("Add some cards before starting");
    } else {
      onOpen();
    }
  };

  return (
    <>
      <Button
        size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
        borderRadius={"0.8rem"}
        bg={"#BA4A00"}
        border="2px"
        borderColor={"#BA4A00"}
        color={"#EEEEEE"}
        _hover={{ bg: "#A94402" }}
        boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
        onClick={handleStartClick}
      >
        Start
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          borderRadius={"0.9rem"}
          overflow="hidden"
          bg={Colors.background}
          minW={"fit-content"}
          minH={"fit-content"}
          marginLeft={{ xl: "40px", lg: "30px", md: "35px", base: "15px" }}
          marginRight={{ xl: "40px", lg: "30px", md: "35px", base: "15px" }}
        >
          <ModalHeader
            fontSize={{ xl: "3xl", lg: "2xl", md: "2xl", base: "2xl" }}
            color={Colors.text}
            bg={Colors.background}
            alignSelf={"center"}
          >
            {stack.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            bg={Colors.background}
            alignSelf={"center"}
            marginBottom={"30px"}
          >
            <VStack
              spacing={{ xl: "40px", lg: "30px", md: "30px", base: "30px" }}
            >
              <HStack spacing={"35px"}>
                {isBase && backButton()}
                <Button
                  boxShadow={"1px 1px 1px 0 rgba(0,0,0,0.3)"}
                  borderRadius={"0.8rem"}
                  bg={Colors.lightGray}
                  _hover={{ bg: "#C9C6C6" }}
                  fontSize={{ xl: "1xl", lg: "1xl", md: "lg", base: "md" }}
                >
                  {questionNr + " / " + stack.cardsNumber}
                </Button>
                {isBase && nextButton()}
              </HStack>
              <HStack
                spacing={{ xl: "60px", lg: "20px", md: "30px", base: "15px" }}
              >
                {!isBase && backButton()}
                <Card
                  _hover={{
                    boxShadow: "0.5px 0.5px 7px 0 rgba(0,0,0,0.5)",
                    transition: "0.7s",
                  }}
                  bg={Colors.background}
                  width="fit-content"
                  boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
                >
                  <CardBody>
                    <Heading
                      size={{ xl: "lg", lg: "md", md: "md", base: "md" }}
                      isTruncated
                      whiteSpace="normal"
                      marginTop={5}
                      marginBottom={{
                        xl: "35px",
                        lg: "35px",
                        md: "35px",
                        base: "25px",
                      }}
                      textAlign={"center"}
                    >
                      How many animals are on the planet and on other planets in
                      the whole wide world?
                    </Heading>
                    <Heading
                      textAlign={"center"}
                      color={Colors.darkGray}
                      fontSize={{ xl: "2xl", lg: "xl", md: "lg", base: "lg" }}
                    >
                      26484 milion animals
                    </Heading>
                  </CardBody>
                </Card>
                {!isBase && nextButton()}
              </HStack>
              <Button
                borderRadius={"0.9rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
                fontSize={{ xl: "2xl", lg: "xl", md: "lg", base: "lg" }}
              >
                Show Answer
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StartButton;

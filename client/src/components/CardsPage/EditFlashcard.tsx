import { Colors } from "@/colors";
import { Flashcard } from "@/hooks/useGetCards";
import useUpdateCard from "@/hooks/useUpdateCard";
import {
  Button,
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
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

interface Props {
  card: Flashcard;
}

const EditFlashcard = ({ card }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [question, setQuestion] = useState<string>(card.question);
  const [answer, setAnswer] = useState<string>(card.answer);
  const [label, setLabel] = useState<string>(card.label);
  const [error, setError] = useState<string>("");
  const updateCard = useUpdateCard();

  const handleSaveButton = async () => {
    const error = await updateCard(
      card._id,
      card.stack,
      question,
      answer,
      label
    );
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
        onClick={onOpen}
      >
        Edit
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setError("");
          setAnswer(card.answer);
          setQuestion(card.question);
          setLabel(card.label);
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
            {"Edit card"}
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
                Question
              </Heading>
              <Input
                name="question"
                value={question}
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
                value={answer}
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

export default EditFlashcard;

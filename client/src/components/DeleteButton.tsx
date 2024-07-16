"use client";
import { Colors } from "@/colors";
import useDeleteCard from "@/hooks/useDeleteCard";
import useDeleteStack from "@/hooks/useDeleteStack";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  id: string;
  mode: string;
}

const DeleteButton = ({ id, mode }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);
  const deleteStack = useDeleteStack(id);
  const deleteCard = useDeleteCard(id);
  const handleDelete = async () => {
    mode == "stack" ? await deleteStack() : await deleteCard();
    onClose();
    window.location.reload();
  };

  return (
    <>
      {mode == "stack" ? (
        <MenuItem
          bg={Colors.background}
          _hover={{ bg: Colors.lightGray }}
          onClick={onOpen}
        >
          Delete stack
        </MenuItem>
      ) : (
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
          Delete
        </Button>
      )}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            borderRadius={"0.9rem"}
            overflow="hidden"
            marginLeft={5}
            marginRight={5}
          >
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
              bg={Colors.background}
            >
              {`Delete ${mode}`}
            </AlertDialogHeader>
            <AlertDialogBody bg={Colors.background}>
              {`Are you sure you want to delete this ${mode}? You can't undo this
              action afterwards.`}
            </AlertDialogBody>

            <AlertDialogFooter bg={Colors.background}>
              <Button
                ref={cancelRef}
                onClick={onClose}
                mr={3}
                border="2px"
                borderRadius={"0.9rem"}
                borderColor={"#7C7C7C"}
                color={"#7C7C7C"}
                bg={Colors.lightGray}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Cancel
              </Button>
              <Button
                bg={"#D7D7D7"}
                border="2px"
                borderRadius={"0.9rem"}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
                borderColor={Colors.orange}
                color={Colors.orange}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeleteButton;

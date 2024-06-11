import { Colors } from "@/colors";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  deleteAccountButtonClick: () => void;
}

const DeleteAccountButton = ({ deleteAccountButtonClick }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        bg={"#D7D7D7"}
        border="2px"
        borderColor={"#7C7C7C"}
        color={"#7C7C7C"}
        mr={3}
        borderRadius={"0.9rem"}
        boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
        onClick={onOpen}
      >
        Delete account
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent borderRadius={"0.9rem"} overflow="hidden">
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
              bg={Colors.background}
            >
              Delete Account
            </AlertDialogHeader>
            <AlertDialogBody bg={Colors.background}>
              Are you sure you want to delete your account? You can't undo this
              action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter bg={Colors.background}>
              <Button
                ref={cancelRef}
                onClick={onClose}
                mr={3}
                border="2px"
                borderRadius={"0.9rem"}
                borderColor={Colors.orange}
                color={Colors.orange}
                bg={Colors.lightGray}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  deleteAccountButtonClick();
                  onClose();
                }}
                bg={"#D7D7D7"}
                border="2px"
                borderColor={"#7C7C7C"}
                color={"#7C7C7C"}
                borderRadius={"0.9rem"}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
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

export default DeleteAccountButton;

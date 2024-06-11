import { AuthContext } from "@/AuthProvider";
import { Colors } from "@/colors";
import useAccount from "@/hooks/useAccount";
import {
  Button,
  Input,
  MenuItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import DeleteAccountButton from "./DeleteAccountButton";

const MyAccountButton = () => {
  const { user } = useContext(AuthContext);

  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateAccount, deleteAccount } = useAccount();

  const manageSaveButtonClick = async () => {
    const message = await updateAccount(user?.id, {
      currentPassword,
      newPassword,
    });
    if (message) {
      if (Array.isArray(message)) setErrorMessage(message[0]);
      else setErrorMessage(message);
    }
  };
  const manageDeleteButtonClick = async () => {
    await deleteAccount(user?.id);
  };

  return (
    <>
      <MenuItem
        bg={Colors.background}
        _hover={{ bg: Colors.lightGray }}
        onClick={onOpen}
      >
        My Account
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={"0.9rem"} overflow="hidden">
          <ModalHeader color={Colors.text} bg={Colors.background}>
            My Account
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={Colors.background}>
            <VStack spacing={5}>
              <Input
                value={user?.email}
                id="email"
                readOnly
                borderRadius={"0.9rem"}
                borderColor={Colors.darkGray}
                variant={"outline"}
              />
              <Input
                value={user?.name}
                id="name"
                readOnly
                borderRadius={"0.9rem"}
                borderColor={Colors.darkGray}
                variant={"outline"}
              />
              <Input
                placeholder="Enter your current password..."
                type="password"
                id="cp"
                borderRadius={"0.9rem"}
                borderColor={Colors.darkGray}
                variant={"outline"}
                onChange={(e) => {
                  e.preventDefault();
                  setCurrentPassword(e.target.value);
                }}
              />
              <Input
                placeholder="Enter new password..."
                type="password"
                id="np"
                borderRadius={"0.9rem"}
                borderColor={Colors.darkGray}
                variant={"outline"}
                onChange={(e) => {
                  e.preventDefault();
                  setNewPassword(e.target.value);
                }}
              />
              {errorMessage && (
                <Text
                  color={"red"}
                  marginTop={-3}
                  marginBottom={-3}
                  textAlign={"left"}
                >
                  {errorMessage}
                </Text>
              )}
            </VStack>
          </ModalBody>
          <ModalFooter bg={Colors.background}>
            <DeleteAccountButton
              deleteAccountButtonClick={manageDeleteButtonClick}
            />
            <Button
              borderRadius={"0.9rem"}
              bg={"#BA4A00"}
              border="2px"
              borderColor={"#BA4A00"}
              color={"#EEEEEE"}
              _hover={{ bg: "#A94402" }}
              boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              onClick={manageSaveButtonClick}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyAccountButton;

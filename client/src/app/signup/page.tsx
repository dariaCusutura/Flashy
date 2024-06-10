"use client";
import {
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import NextLink from "next/link";
import { Colors } from "@/colors";
import { Routes } from "@/routes";
import { LuUser } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLock } from "react-icons/tb";
import { TbLockCheck } from "react-icons/tb";
import { AuthContext } from "@/AuthProvider";

const page = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>();
  const { register } = useContext(AuthContext);

  const manageSignInButtonClick = async () => {
    const { message } = await register(name, email, password, confirmPassword);
    if (message) setErrorMessage(message);
  };

  return (
    <Container
      marginTop="20vh"
      marginBottom={"10vh"}
      bg={Colors.background}
      borderRadius={"0.9rem"}
      style={{ boxShadow: "5px 4px 12px 0 rgba(0,0,0,0.3)" }}
      maxW="300px"
    >
      <Tabs variant="unstyled" w="100%">
        <TabList w="100%">
          <Tab
            w="50%"
            _selected={{ bg: Colors.background, color: Colors.text }}
          >
            Sign Up
          </Tab>
          <Tab
            as={NextLink}
            href={Routes.LOGIN}
            w="50%"
            _selected={{ bg: Colors.background, color: Colors.text }}
          >
            Login
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="1.5px"
          bg={Colors.text}
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <VStack spacing={5} marginTop={3}>
              <FormControl id="name" isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<LuUser color={Colors.darkGray} size={20} />}
                    paddingLeft="0.5rem"
                  />
                  <Input
                    type="text"
                    borderRadius={"0.9rem"}
                    color={Colors.darkGray}
                    bg={Colors.background}
                    variant={"filled"}
                    style={{ boxShadow: "4px 4px 12px 0 rgba(0,0,0,0.3)" }}
                    placeholder="Enter your name..."
                    onChange={(e) => {
                      e.preventDefault();
                      setName(e.target.value);
                    }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="email" isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={
                      <MdOutlineMailOutline color={Colors.darkGray} size={20} />
                    }
                    paddingLeft="0.5rem"
                  />
                  <Input
                    type="email"
                    borderRadius={"0.9rem"}
                    bg={Colors.background}
                    variant={"filled"}
                    style={{ boxShadow: "4px 4px 12px 0 rgba(0,0,0,0.3)" }}
                    placeholder="Enter your email..."
                    onChange={(e) => {
                      e.preventDefault();
                      setEmail(e.target.value);
                    }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="password" isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<TbLock color={Colors.darkGray} size={20} />}
                    paddingLeft="0.5rem"
                  />
                  <Input
                    type="password"
                    borderRadius={"0.9rem"}
                    bg={Colors.background}
                    variant={"filled"}
                    style={{ boxShadow: "4px 4px 12px 0 rgba(0,0,0,0.3)" }}
                    placeholder="Enter your password..."
                    onChange={(e) => {
                      e.preventDefault();
                      setPassword(e.target.value);
                    }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="confirmPassword" isRequired>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<TbLockCheck color={Colors.darkGray} size={20} />}
                    paddingLeft="0.5rem"
                  />
                  <Input
                    type="password"
                    borderRadius={"0.9rem"}
                    bg={Colors.background}
                    variant={"filled"}
                    style={{ boxShadow: "4px 4px 12px 0 rgba(0,0,0,0.3)" }}
                    placeholder="Confirm your password..."
                    onChange={(e) => {
                      e.preventDefault();
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </InputGroup>
              </FormControl>
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
              <Button
                width={"100%"}
                size={"lg"}
                fontSize={"lg"}
                borderRadius={"0.9rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
                onClick={manageSignInButtonClick}
              >
                Create Account
              </Button>
              <Text color={Colors.darkGray}>
                Already have an account?{" "}
                <Link href={Routes.LOGIN} color={Colors.text}>
                  Log In
                </Link>
              </Text>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default page;

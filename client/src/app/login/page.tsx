"use client";
import {
  Button,
  Container,
  FormControl,
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
import React, { useState, useContext } from "react";
import NextLink from "next/link";
import { Colors } from "@/colors";
import { Routes } from "@/routes";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLock } from "react-icons/tb";
import { AuthContext } from "@/AuthProvider";

const page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>();
  const { login } = useContext(AuthContext);

  const handleLoginButtonClick = async () => {
    const { message } = await login(email, password);
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
      <Tabs variant="unstyled" w="100%" defaultIndex={1}>
        <TabList w="100%">
          <Tab
            as={NextLink}
            href={Routes.SIGNUP}
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
          <TabPanel></TabPanel>
          <TabPanel>
            <VStack spacing={5} marginTop={3} textAlign={"left"}>
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
                onClick={handleLoginButtonClick}
              >
                Login
              </Button>
              <Text color={Colors.darkGray}>
                Don't have an account?{" "}
                <Link href={Routes.SIGNUP} color={Colors.text}>
                  Sign Up
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

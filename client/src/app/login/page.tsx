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
import React, { ReactEventHandler } from "react";
import NextLink from "next/link";
import { Colors } from "@/colors";
import { Routes } from "@/routes";
import { LuUser } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLock } from "react-icons/tb";
import { TbLockCheck } from "react-icons/tb";
import { useRouter } from "next/navigation";

const page = () => {

  return (
    <Center>
      <Container
        marginTop="20vh"
        marginBottom={"10vh"}
        bg={Colors.background}
        borderRadius={"0.9rem"}
        centerContent={true}
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
              <Center>
                <VStack spacing={8} marginTop={3}>
                  <FormControl id="email" isRequired>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={
                          <MdOutlineMailOutline
                            color={Colors.darkGray}
                            size={20}
                          />
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
                      />
                    </InputGroup>
                  </FormControl>
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
              </Center>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Center>
  );
};

export default page;

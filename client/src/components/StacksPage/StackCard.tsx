import { Colors } from "@/colors";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  IconButton,
  Text,
  HStack,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoBookmark } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";

const StackCard = () => {
  return (
    <>
      <GridItem>
        <Card
          bg={Colors.background}
          width="fit-content"
          boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
        >
          <CardHeader paddingBottom={0}>
            <HStack width="100%" justifyContent="space-between">
              <Heading size={{ xl: "lg", lg: "md", md: "md", base: "md" }}>
                {" "}
                Anatomy
              </Heading>
              <IconButton
                aria-label="stackMenu"
                icon={<BsThreeDotsVertical size={20} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.lightGray }}
                _active={{ bg: Colors.lightGray }}
                marginRight={-3}
              />
            </HStack>
          </CardHeader>
          <CardBody paddingTop={0}>
            <Text
              color={Colors.darkGray}
              fontSize={{ xl: "lg", lg: "md", md: "md", base: "md" }}
            >
              5 CARDS
            </Text>
          </CardBody>
          <CardFooter marginTop={{ lg: "1px", xl: "20px" }}>
            <HStack>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Start
              </Button>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Edit Cards
              </Button>
              <IconButton
                marginLeft={{
                  md: "30px",
                  lg: "40px",
                  xl: "70px",
                  base: "50px",
                }}
                marginRight={-3}
                aria-label="saveStack"
                icon={<IoBookmarkOutline size={25} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.background }}
                _active={{ bg: Colors.background }}
              />
            </HStack>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem>
        <Card
          bg={Colors.background}
          width="fit-content"
          boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
        >
          <CardHeader paddingBottom={0}>
            <HStack width="100%" justifyContent="space-between">
              <Heading size={{ xl: "lg", lg: "md", md: "md", base: "md" }}>
                {" "}
                Anatomy
              </Heading>
              <IconButton
                aria-label="stackMenu"
                icon={<BsThreeDotsVertical size={20} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.lightGray }}
                _active={{ bg: Colors.lightGray }}
                marginRight={-3}
              />
            </HStack>
          </CardHeader>
          <CardBody paddingTop={0}>
            <Text
              color={Colors.darkGray}
              fontSize={{ xl: "lg", lg: "md", md: "md", base: "md" }}
            >
              5 CARDS
            </Text>
          </CardBody>
          <CardFooter marginTop={{ lg: "1px", xl: "20px" }}>
            <HStack>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Start
              </Button>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Edit Cards
              </Button>
              <IconButton
                marginLeft={{
                  md: "30px",
                  lg: "40px",
                  xl: "70px",
                  base: "50px",
                }}
                marginRight={-3}
                aria-label="saveStack"
                icon={<IoBookmarkOutline size={25} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.background }}
                _active={{ bg: Colors.background }}
              />
            </HStack>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem>
        <Card
          bg={Colors.background}
          width="fit-content"
          boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
        >
          <CardHeader paddingBottom={0}>
            <HStack width="100%" justifyContent="space-between">
              <Heading size={{ xl: "lg", lg: "md", md: "md", base: "md" }}>
                {" "}
                Anatomy
              </Heading>
              <IconButton
                aria-label="stackMenu"
                icon={<BsThreeDotsVertical size={20} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.lightGray }}
                _active={{ bg: Colors.lightGray }}
                marginRight={-3}
              />
            </HStack>
          </CardHeader>
          <CardBody paddingTop={0}>
            <Text
              color={Colors.darkGray}
              fontSize={{ xl: "lg", lg: "md", md: "md", base: "md" }}
            >
              5 CARDS
            </Text>
          </CardBody>
          <CardFooter marginTop={{ lg: "1px", xl: "20px" }}>
            <HStack>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Start
              </Button>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Edit Cards
              </Button>
              <IconButton
                marginLeft={{
                  md: "30px",
                  lg: "40px",
                  xl: "70px",
                  base: "50px",
                }}
                marginRight={-3}
                aria-label="saveStack"
                icon={<IoBookmarkOutline size={25} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.background }}
                _active={{ bg: Colors.background }}
              />
            </HStack>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem>
        <Card
          bg={Colors.background}
          width="fit-content"
          boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
        >
          <CardHeader paddingBottom={0}>
            <HStack width="100%" justifyContent="space-between">
              <Heading size={{ xl: "lg", lg: "md", md: "md", base: "md" }}>
                {" "}
                Anatomy
              </Heading>
              <IconButton
                aria-label="stackMenu"
                icon={<BsThreeDotsVertical size={20} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.lightGray }}
                _active={{ bg: Colors.lightGray }}
                marginRight={-3}
              />
            </HStack>
          </CardHeader>
          <CardBody paddingTop={0}>
            <Text
              color={Colors.darkGray}
              fontSize={{ xl: "lg", lg: "md", md: "md", base: "md" }}
            >
              5 CARDS
            </Text>
          </CardBody>
          <CardFooter marginTop={{ lg: "1px", xl: "20px" }}>
            <HStack>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Start
              </Button>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Edit Cards
              </Button>
              <IconButton
                marginLeft={{
                  md: "30px",
                  lg: "40px",
                  xl: "70px",
                  base: "50px",
                }}
                marginRight={-3}
                aria-label="saveStack"
                icon={<IoBookmarkOutline size={25} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.background }}
                _active={{ bg: Colors.background }}
              />
            </HStack>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem>
        <Card
          bg={Colors.background}
          width="fit-content"
          boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
        >
          <CardHeader paddingBottom={0}>
            <HStack width="100%" justifyContent="space-between">
              <Heading size={{ xl: "lg", lg: "md", md: "md", base: "md" }}>
                {" "}
                Anatomy
              </Heading>
              <IconButton
                aria-label="stackMenu"
                icon={<BsThreeDotsVertical size={20} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.lightGray }}
                _active={{ bg: Colors.lightGray }}
                marginRight={-3}
              />
            </HStack>
          </CardHeader>
          <CardBody paddingTop={0}>
            <Text
              color={Colors.darkGray}
              fontSize={{ xl: "lg", lg: "md", md: "md", base: "md" }}
            >
              5 CARDS
            </Text>
          </CardBody>
          <CardFooter marginTop={{ lg: "1px", xl: "20px" }}>
            <HStack>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Start
              </Button>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Edit Cards
              </Button>
              <IconButton
                marginLeft={{
                  md: "30px",
                  lg: "40px",
                  xl: "70px",
                  base: "50px",
                }}
                marginRight={-3}
                aria-label="saveStack"
                icon={<IoBookmarkOutline size={25} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.background }}
                _active={{ bg: Colors.background }}
              />
            </HStack>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem>
        <Card
          bg={Colors.background}
          width="fit-content"
          boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
        >
          <CardHeader paddingBottom={0}>
            <HStack width="100%" justifyContent="space-between">
              <Heading size={{ xl: "lg", lg: "md", md: "md", base: "md" }}>
                {" "}
                Anatomy
              </Heading>
              <IconButton
                aria-label="stackMenu"
                icon={<BsThreeDotsVertical size={20} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.lightGray }}
                _active={{ bg: Colors.lightGray }}
                marginRight={-3}
              />
            </HStack>
          </CardHeader>
          <CardBody paddingTop={0}>
            <Text
              color={Colors.darkGray}
              fontSize={{ xl: "lg", lg: "md", md: "md", base: "md" }}
            >
              5 CARDS
            </Text>
          </CardBody>
          <CardFooter marginTop={{ lg: "1px", xl: "20px" }}>
            <HStack>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Start
              </Button>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Edit Cards
              </Button>
              <IconButton
                marginLeft={{
                  md: "30px",
                  lg: "40px",
                  xl: "70px",
                  base: "50px",
                }}
                marginRight={-3}
                aria-label="saveStack"
                icon={<IoBookmarkOutline size={25} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.background }}
                _active={{ bg: Colors.background }}
              />
            </HStack>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem>
        <Card
          bg={Colors.background}
          width="fit-content"
          boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
        >
          <CardHeader paddingBottom={0}>
            <HStack width="100%" justifyContent="space-between">
              <Heading size={{ xl: "lg", lg: "md", md: "md", base: "md" }}>
                {" "}
                Anatomy
              </Heading>
              <IconButton
                aria-label="stackMenu"
                icon={<BsThreeDotsVertical size={20} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.lightGray }}
                _active={{ bg: Colors.lightGray }}
                marginRight={-3}
              />
            </HStack>
          </CardHeader>
          <CardBody paddingTop={0}>
            <Text
              color={Colors.darkGray}
              fontSize={{ xl: "lg", lg: "md", md: "md", base: "md" }}
            >
              5 CARDS
            </Text>
          </CardBody>
          <CardFooter marginTop={{ lg: "1px", xl: "20px" }}>
            <HStack>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Start
              </Button>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Edit Cards
              </Button>
              <IconButton
                marginLeft={{
                  md: "30px",
                  lg: "40px",
                  xl: "70px",
                  base: "50px",
                }}
                marginRight={-3}
                aria-label="saveStack"
                icon={<IoBookmarkOutline size={25} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.background }}
                _active={{ bg: Colors.background }}
              />
            </HStack>
          </CardFooter>
        </Card>
      </GridItem>

      <GridItem>
        <Card
          bg={Colors.background}
          width="fit-content"
          boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
        >
          <CardHeader paddingBottom={0}>
            <HStack width="100%" justifyContent="space-between">
              <Heading size={{ xl: "lg", lg: "md", md: "md", base: "md" }}>
                {" "}
                Anatomy
              </Heading>
              <IconButton
                aria-label="stackMenu"
                icon={<BsThreeDotsVertical size={20} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.lightGray }}
                _active={{ bg: Colors.lightGray }}
                marginRight={-3}
              />
            </HStack>
          </CardHeader>
          <CardBody paddingTop={0}>
            <Text
              color={Colors.darkGray}
              fontSize={{ xl: "lg", lg: "md", md: "md", base: "md" }}
            >
              5 CARDS
            </Text>
          </CardBody>
          <CardFooter marginTop={{ lg: "1px", xl: "20px" }}>
            <HStack>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Start
              </Button>
              <Button
                size={{ xl: "md", lg: "sm", md: "sm", base: "sm" }}
                borderRadius={"0.8rem"}
                bg={"#BA4A00"}
                border="2px"
                borderColor={"#BA4A00"}
                color={"#EEEEEE"}
                _hover={{ bg: "#A94402" }}
                boxShadow={"3px 3px 2px 0 rgba(0,0,0,0.3)"}
              >
                Edit Cards
              </Button>
              <IconButton
                marginLeft={{
                  md: "30px",
                  lg: "40px",
                  xl: "70px",
                  base: "50px",
                }}
                marginRight={-3}
                aria-label="saveStack"
                icon={<IoBookmarkOutline size={25} />}
                variant="ghost"
                size={"sm"}
                _hover={{ bg: Colors.background }}
                _active={{ bg: Colors.background }}
              />
            </HStack>
          </CardFooter>
        </Card>
      </GridItem>
    </>
  );
};

export default StackCard;

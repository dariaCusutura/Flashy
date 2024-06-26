import React from "react";
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
  Spacer,
} from "@chakra-ui/react";
import { Colors } from "@/colors";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

const FlashCard = () => {
  return (
    <>
      <GridItem width="100%">
        <Card
          _hover={{
            boxShadow: "0.5px 0.5px 7px 0 rgba(0,0,0,0.5)",
            transition: "0.7s",
          }}
          bg={Colors.background}
          width="100%"
          boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
        >
          <CardHeader paddingBottom={0}>
            <Heading
              size={{ xl: "lg", lg: "md", md: "md", base: "md" }}
              isTruncated
              whiteSpace="normal"
            >
              What is the strongest muscle in the human body?
            </Heading>
          </CardHeader>
          <CardBody paddingTop={3}>
            <Text
              color={Colors.darkGray}
              fontSize={{ xl: "xl", lg: "xl", md: "lg", base: "lg" }}
            >
              The masseter
            </Text>
          </CardBody>
          <CardFooter marginTop={{ lg: "1px", xl: "20px" }}>
            <HStack width={"100%"}>
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
                Edit
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
                Delete
              </Button>
              <Spacer />
              <IconButton
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

      <GridItem width="100%">
        <Card
          _hover={{
            boxShadow: "0.5px 0.5px 7px 0 rgba(0,0,0,0.5)",
            transition: "0.7s",
          }}
          bg={Colors.background}
          width="100%"
          boxShadow={"0.5px 0.5px 7px 0 rgba(0,0,0,0.3)"}
        >
          <CardHeader paddingBottom={0}>
            <Heading
              size={{ xl: "lg", lg: "md", md: "md", base: "md" }}
              isTruncated
              whiteSpace="normal"
            >
              What is the strongest muscle in the human body?
            </Heading>
          </CardHeader>
          <CardBody paddingTop={3}>
            <Text
              color={Colors.darkGray}
              fontSize={{ xl: "xl", lg: "xl", md: "lg", base: "lg" }}
            >
              The masseter
            </Text>
          </CardBody>
          <CardFooter marginTop={{ lg: "1px", xl: "20px" }}>
            <HStack width={"100%"}>
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
                Edit
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
                Delete
              </Button>
              <Spacer />
              <IconButton
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

export default FlashCard;

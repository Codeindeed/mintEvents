import { Box, Button, Input, Spinner, Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import {
  useActionData,
  useNavigation,
  Form as InputForm,
} from "react-router-dom";

export default function RegisterEvent() {
  const toast = useToast();
  const data = useActionData();
  const navigate = useNavigation();
  const isloading = navigate.state === "submitting" ? true : false;
  useEffect(() => {
    if (data) {
      toast({
        title: ` ${data?.message}`,
        description:
          "Event not found Create an event to register for the event",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [data, toast]);
  return (
    <Box
      display={"flex"}
      pt={"7.5rem"}
      pb={"7.5rem"}
      pl={"3.4375rem"}
      pr={"3.4375rem"}
      flexDirection={"column"}
      alignItems={"center"}
      alignSelf={"stretch"}
      gap={"1.3rem"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1.25rem"}
        alignSelf={"stretch"}
      >
        <Text
          textAlign={"center"}
          fontSize={"2.27rem"}
          fontWeight={"700"}
          lineHeight={"130%"}
        >
          Register For Event By Inputing Event ID
        </Text>
        <Text
          textAlign={"center"}
          fontSize={"1.27rem"}
          fontWeight={"400"}
          lineHeight={"130%"}
        >
          Search for Event with ID and Claim your spot while waiting for POAP or
          Digital Collectible Mailed to you
        </Text>
      </Box>
      <Box
        w={"50rem"}
        alignItems={"center"}
        h={"40rem"}
        flexDirection={"column"}
        pt={"7.5rem"}
        pl={"3.5rem"}
        pb={"0rem"}
        pr={"3.5rem"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          alignContent={"center"}
          flexDirection={"column"}
          gap={"1.5rem"}
          as={InputForm}
          method="post"
        >
          <Input
            placeholder="INPUT EVENT CODE"
            name="input"
            color={"#00A0DC"}
          />
          <Button
            isLoading={isloading}
            loadingText={"Getting Event...."}
            type="submit"
            w={"25rem"}
            p={"1.8rem"}
            fontWeight={"600"}
            fontSize={"1.2rem"}
            borderRadius={"5rem"}
            bg={"#00A0DC"}
            color={"#fff"}
            _hover={{
              bg: "#1183AD",
            }}
          >
            <Text>Get Event</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

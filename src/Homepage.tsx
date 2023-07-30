import { Box, Text, Input, Button, useToast, Spinner } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useCallback, useState } from "react";

import {
  Form as InputForm,
  useActionData,
  useNavigation,
} from "react-router-dom";
function Homepage() {
  const toast = useToast();
  const data = useActionData();
  const navigate = useNavigation();
  const isloading = navigate.state === "submitting" ? true : false;
  useEffect(() => {
    if (data) {
      toast({
        title: ` ${data?.message}`,
        description:
          "Event not fount Create an event to register for the event",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [data, toast]);
  return (
    <>
      {
        <Box
          h="100%"
          w={"100%"}
          bg={"black"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Box
              w={"500px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              gap={1}
              color={"white"}
            >
              <Text fontSize={"6rem"} color={"blue.700"}>
                Mintevents
              </Text>
              <Text as={"p"} fontSize={"1rem"} p={4} fontWeight={"bold"}>
                Seamelessly Create in Real Life Events and give users Digital
                Passports to attend
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              gap={5}
              as={InputForm}
              method="post"
            >
              <Input
                placeholder="INPUT EVENT CODE"
                name="input"
                color={"white"}
              />
              <Button m={"auto"} w={"60%"} p={6} type="submit">
                {isloading && <Spinner></Spinner>}
                {!isloading && <Text>Get Event</Text>}
              </Button>
            </Box>
          </Box>
        </Box>
      }
    </>
  );
}

export default Homepage;

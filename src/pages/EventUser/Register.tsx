import {
  Box,
  VStack,
  Input,
  Button,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useLoaderData, Form as Reach, useActionData } from "react-router-dom";
function Register() {
  const [{ eventName, eventDesc, totalNum, created_at, endDate }, registered] =
    useLoaderData();
  const data = useActionData();
  const toast = useToast();
  let startDate: string;
  let end: string;
  if (data?.message !== null && data?.message !== undefined) {
    toast({
      title: ` ${data?.message}`,
      description: "Please input a valid email address",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  } else if (data?.message === null) {
    toast({
      title: `Already registered`,
      description: "You've already Registered for the event",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
  if (created_at) startDate = new Date(created_at).toDateString();
  if (endDate) end = new Date(endDate).toDateString();
  const isEligible = totalNum - registered === 0 ? true : false;
  const ended = new Date() > new Date(endDate) ? true : false;
  return (
    <Box
      h="100%"
      w={"100%"}
      bg={"black"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={5}
      >
        <VStack align="stretch">
          <Box h="100px" bg="pink.100">
            <Text>eventName : {eventName}</Text>
            <Text>Start Date : {startDate}</Text>
            <Text>End Date: {end}</Text>
            <Text>Event Details: {eventDesc}</Text>
            <Text>Total Expected: {totalNum}</Text>
            <Text>Registerd:{registered}</Text>
          </Box>
        </VStack>
        <Flex as={Reach} flexDirection={"column"} gap={3} method="post">
          {!isEligible && !ended && (
            <>
              <Input placeholder="Send your Email here" name="mail" required />
              <Button m={"auto"} w={"50%"} p={5} type="submit">
                Submit
              </Button>
            </>
          )}
          {isEligible && (
            <Text color={"red.200"} fontSize={"2xl"}>
              Event Closed Max Number of Participants Entered
            </Text>
          )}
          {!isEligible && ended && (
            <Text color={"red.200"} fontSize={"2xl"}>
              Event Ended no more Entries 😇
            </Text>
          )}
        </Flex>
      </Box>
    </Box>
  );
}

export default Register;

import {
  Box,
  Input,
  Button,
  Flex,
  Text,
  useToast,
  WrapItem,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  useLoaderData,
  Form as Reach,
  useActionData,
  useNavigation,
} from "react-router-dom";
function Register() {
  type LoaderData = [
    {
      eventName: string;
      eventDesc: string;
      totalNum: number;
      created_at: string;
      endDate: string;
    },
    number
  ];

  const [{ eventName, eventDesc, totalNum, created_at, endDate }, registered] = useLoaderData() as LoaderData;
  const data: any = useActionData();
  const navigate = useNavigation();
  const isloading = navigate.state === "submitting" ? true : false;
  const toast = useToast();
  let startDate: string | undefined;
  let end: string | undefined;
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
      display={"flex"}
      pt={"7.5rem"}
      pb={"7.5rem"}
      pl={"3.4375rem"}
      pr={"3.4375rem"}
      flexDirection={"column"}
      alignItems={"center"}
      alignSelf={"stretch"}
    >
      <Box
        display={"flex"}
        w={["45.125rem"]}
        h={"40rem"}
        pt={"2.5rem"}
        pb={"2.5rem"}
        pl={"1.875rem"}
        pr={"1.875rem"}
        alignItems={"center"}
        gap={"1.875rem"}
        borderRadius={"1.25rem"}
        bg={"#fff"}
        boxShadow={"2xl"}
        flexDirection={"column"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"1rem"}
          alignSelf={"stretch"}
        >
          <WrapItem w={"6.25rem"} h={"6.25rem"}>
            <Avatar size="xl" name={eventName} />{" "}
          </WrapItem>
          <Box display={"flex"} flexDirection={"column"}>
            <Heading as={"h2"} size={"md"}>
              {eventName}
            </Heading>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"1.25rem"}
          alignSelf={"stretch"}
        >
          <Text
            alignSelf={"stretch"}
            textAlign={"center"}
            color={"#F8D57E"}
            fontWeight={"400"}
            lineHeight={"160%"}
            fontSize={"1.3rem"}
          >
            {eventDesc}
          </Text>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"start"}
          gap={"1.25rem"}
          alignSelf={"stretch"}
        >
          <Text
            color={"#009379"}
            textAlign={"center"}
            fontWeight={"700"}
            fontSize={"0.8rem"}
          >
            Started {startDate}
          </Text>
          <Text
            color={"#FF6250"}
            textAlign={"center"}
            fontWeight={"700"}
            fontSize={"0.8rem"}
          >
            Ending {end}
          </Text>
          <Text
            color={"#000"}
            textAlign={"center"}
            fontWeight={"700"}
            fontSize={"0.8rem"}
          >
            Total number Expected {totalNum}
          </Text>
          <Text
            color={"#009379"}
            textAlign={"center"}
            fontWeight={"700"}
            fontSize={"0.8rem"}
          >
            Registered {registered}
          </Text>
        </Box>
        <Flex
          as={Reach}
          flexDirection={"column"}
          gap={"1.5rem"}
          method="post"
          alignSelf={"stretch"}
        >
          {!isEligible && !ended && (
            <>
              <Input placeholder="Subscripe with email" name="mail" required />
              <Button
                m={"auto"}
                w={"50%"}
                p={5}
                type="submit"
                colorScheme="cyan"
                isLoading={isloading}
                loadingText={"Subscribing"}
              >
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

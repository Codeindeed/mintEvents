import {
  Metaplex,
  walletAdapterIdentity,
  bundlrStorage,
  toMetaplexFile,
} from "@metaplex-foundation/js";
import image from "../assets/imgs.png";
import * as fs from "fs";
import { useEffect } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import SendInvite from "./CreateMint";
import { useLoaderData, Link as ReachLink } from "react-router-dom";

function Uploadmetadata() {
  const data = useLoaderData();
  let bg: string;
  console.log(data);
  const total = data.length;

  function getRemainingDays(startdate: string, endDate: string) {
    let day: string;
    const days = new Date(endDate).getDate() - new Date(startdate).getDate();
    if (days >= 4) {
      day = `${days} more days to go`;
    }
    if (days === 3) {
      day = `Next tommorow`;
    }
    if (days === 2) {
      day = `Tommorow`;
    }
    if (days == 1) {
      day = `Today`;
    } else if (days <= 0) {
      day = "Ended";
    }
    return day;
  }
  return (
    <Container
      maxW="2xl"
      centerContent
      // overflow={"hidden"}
      w={"100%"}
    >
      <Flex flexDirection={"column"} gap={4}>
        <Box
          textAlign={"center"}
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          <Text fontSize="xl" fontWeight="bold">
            Total events Created
            <Badge ml="1" fontSize="0.8em" colorScheme="green">
              {total}
            </Badge>
          </Text>
          <Link as={ReachLink} to="upload">
            {" "}
            <Button colorScheme={"purple"}>Create Event</Button>
          </Link>
        </Box>
        <Box
          padding="6"
          color="black"
          maxW="100%"
          w={"60rem"}
          minW={"100%"}
          h={"60rem"}
          overflow={"scroll"}
        >
          <Heading fontSize={18}>Events</Heading>
          {total > 0 && (
            <Flex flexDirection={"column"} gap={3}>
              {[...data]
                .sort((a, b) => {
                  return Date.parse(b.endDate) - Date.parse(a.endDate);
                })
                .map((data) => (
                  <HStack
                    bg={`${
                      getRemainingDays(data.created_at, data.endDate) ===
                      "Ended"
                        ? "red.100"
                        : "white"
                    }`}
                    p={"4"}
                    boxShadow="2xl"
                    rounded="md"
                    key={data.id}
                  >
                    <AttachmentIcon boxSize={6} w={8} h={4} color="red.500" />
                    <Flex
                      flexDirection={"row"}
                      alignItems={"center"}
                      w={"40rem"}
                      h={"5rem"}
                      p={2}
                      gap={5}
                      fontSize={"8px"}
                    >
                      <Text>Event name:{data.eventName} </Text>
                      <Text>
                        End Date:{" "}
                        {getRemainingDays(data.created_at, data.endDate)}
                      </Text>
                      <Text>Total: {data.totalNum}</Text>
                      <Text>EventId: {data.id}</Text>
                    </Flex>
                    <SendInvite
                      desc={data.eventDesc}
                      symbol={data.eventName}
                      Image={data.image}
                      id={data.id}
                    ></SendInvite>
                  </HStack>
                ))}
            </Flex>
          )}
          {total === 0 && (
            <Box alignItems={"center"}>
              <Link as={ReachLink} to="upload">
                {" "}
                <Button>Please Create an Event So You Can Send Invites</Button>
              </Link>
            </Box>
          )}
        </Box>
      </Flex>
    </Container>
  );
}

export default Uploadmetadata;

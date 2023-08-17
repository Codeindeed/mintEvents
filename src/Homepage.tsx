import {
  Box,
  Text,
  Button,
  Image,
  Card,
  CardHeader,
  Stack,
  CardBody,
  Heading,
  StackDivider,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import {
  Link as Reachlink,
} from "react-router-dom";
function Homepage() {
  return (
    <>
      {
        <Box
          pt={"7.5rem"}
          pb={"0rem"}
          pl={"3.4375rem"}
          pr={"3.4375rem"}
          display={"flex"}
          alignItems={"center"}
          color={"#2D2D2D"}
          alignSelf={"stretch"}
        >
          <Box
            display={"flex"}
            w={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"2.5rem"}
          >
            <Box
              display={"flex"}
              pb={"8rem"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"2.5rem"}
            >
              <Box
                display={"flex"}
                w={"38.75rem"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={"1.25rem"}
              >
                <Text
                  fontSize={"4.1825rem"}
                  fontWeight={"700"}
                  lineHeight={"130%"}
                  letterSpacing={"-0.145rem"}
                >
                  Create Digital proof of Attendance on the Go!!🚀🚀
                </Text>
                <Text
                  fontSize={"1.3125rem"}
                  fontWeight={"300"}
                  lineHeight={"120%"}
                  letterSpacing={"0"}
                >
                  Connect Your Wallet and Create Proof of attendance of both
                  Digital and irl Events on the Go or Just Register and Claim
                  your Poap
                </Text>
              </Box>
              <Button
                as={Reachlink}
                to={"search"}
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
                <Text pr={"1rem"}> Register For Event</Text>
                <ArrowForwardIcon />
              </Button>
            </Box>
            <Box
              w={"28.15rem"}
              h={"28.15rem"}
              flexShrink={"0"}
              alignItems={"center"}
            >
              <Box
                w={"26.23rem"}
                h={"17.5rem"}
                bg={"#fff"}
                borderTopLeftRadius={"7.97619rem"}
                borderTopRightRadius={"7.97619rem"}
                borderBottomRightRadius={"0"}
                borderBottomEndRadius={"0"}
              ></Box>
              <Box w={"2.445rem"} h={"3.065rem"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="49"
                  viewBox="0 0 40 49"
                  fill="none"
                >
                  <path
                    d="M0 24.5C10.8248 24.5 19.6 13.531 19.6 0C19.6 13.531 28.3752 24.5 39.2 24.5C28.3752 24.5 19.6 35.469 19.6 49C19.6 35.469 10.8248 24.5 0 24.5Z"
                    fill="#E55733"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
      }
      <Box
        display={"flex"}
        width={"100%"}
        pt={"7.5rem"}
        pb={"7.5rem"}
        pl={"3.4375rem"}
        pr={"7.5rem"}
        bg={"#00A0DC"}
        flexDirection={"column"}
        gap={"3.75rem"}
        alignItems={"center"}
        color={"#fff"}
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
            Discover Events You Can Attend To Subscribe for Poaps & Nfts{" "}
          </Text>
          <Text
            fontSize={"1.3125rem"}
            fontWeight={"300"}
            lineHeight={"120%"}
            letterSpacing={"0"}
          >
            Check you might be missing an Event with the next proof of
            attendance
          </Text>
        </Box>
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          gap={"1.875rem"}
          color={"#000"}
        >
          <Box
            display={"flex"}
            w={"23.125rem"}
            pb={"0px"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"1.87rem"}
            borderRadius={"1.275rem"}
            overflow={"hidden"}
            bg={"#fff"}
            boxShadow={"2xl"}
          >
            <Image
              h={"17.375rem"}
              alignSelf={"stretch"}
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
            <Box
              display={"flex"}
              pt={"0rem"}
              pr={"0rem"}
              pb={"1.875rem"}
              pl={"1.875rem"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"0.75rem"}
              alignSelf={"stretch"}
            >
              <Text fontSize={"1.75rem"} fontWeight={"600"} lineHeight={"130%"}>
                Event Title
              </Text>
              <Text
                fontSize={"1.315rem"}
                fontWeight={"400"}
                lineHeight={"130%"}
              >
                Description
              </Text>
              <Text fontSize={"1.rem"} fontWeight={"400"} lineHeight={"150%"}>
                Category
              </Text>
            </Box>
          </Box>
          <Box
            display={"flex"}
            w={"23.125rem"}
            pb={"0px"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"1.87rem"}
            borderRadius={"1.275rem"}
            overflow={"hidden"}
            bg={"#fff"}
            boxShadow={"2xl"}
          >
            <Image
              h={"17.375rem"}
              alignSelf={"stretch"}
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
            <Box
              display={"flex"}
              pt={"0rem"}
              pr={"0rem"}
              pb={"1.875rem"}
              pl={"1.875rem"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"0.75rem"}
              alignSelf={"stretch"}
            >
              <Text fontSize={"1.75rem"} fontWeight={"600"} lineHeight={"130%"}>
                Event Title
              </Text>
              <Text
                fontSize={"1.315rem"}
                fontWeight={"400"}
                lineHeight={"130%"}
              >
                Description
              </Text>
              <Text fontSize={"1.rem"} fontWeight={"400"} lineHeight={"150%"}>
                Category
              </Text>
            </Box>
          </Box>
          <Box
            display={"flex"}
            w={"23.125rem"}
            pb={"0px"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"1.87rem"}
            borderRadius={"1.275rem"}
            overflow={"hidden"}
            bg={"#fff"}
            boxShadow={"2xl"}
          >
            <Image
              h={"17.375rem"}
              alignSelf={"stretch"}
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
            <Box
              display={"flex"}
              pt={"0rem"}
              pr={"0rem"}
              pb={"1.875rem"}
              pl={"1.875rem"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={"0.75rem"}
              alignSelf={"stretch"}
            >
              <Text fontSize={"1.75rem"} fontWeight={"600"} lineHeight={"130%"}>
                Event Title
              </Text>
              <Text
                fontSize={"1.315rem"}
                fontWeight={"400"}
                lineHeight={"130%"}
              >
                Description
              </Text>
              <Text fontSize={"1.rem"} fontWeight={"400"} lineHeight={"150%"}>
                Category
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        width={"100%"}
        pt={"7.5rem"}
        pb={"3.4375rem"}
        pl={"3.4375rem"}
        pr={"7.5rem"}
        flexDirection={"column"}
        gap={"3.75rem"}
        alignItems={"center"}
      >
        <Box display={"flex"} flexDirection={"column"} alignSelf={"stretch"}>
          <Text
            fontSize={"2.5rem"}
            fontWeight={"700"}
            lineHeight={"170%"}
            textAlign={"center"}
          >
            About MintEvents
          </Text>
        </Box>
        <Box w={"60rem"} alignItems={"center"}>
          <Card bg={"#f8f9ff"} boxShadow={""} alignSelf={"stretch"}>
            <CardHeader>
              <Heading size="md" fontSize={"1.5rem"}>
                Create Digital passports, Collectibles or Poaps for all Events
                You wish to Create
              </Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading
                    size="xs"
                    fontSize={"1.3rem"}
                    textTransform="uppercase"
                  >
                    IRL {"(In Real Life Events)"}
                  </Heading>
                  <Text
                    pt="2"
                    fontSize={"1.125rem"}
                    fontWeight={"300"}
                    lineHeight={"120%"}
                    letterSpacing={"0"}
                  >
                    Create Poaps For attendants of IRL Events you host and Use
                    them as Proof of attendance .
                  </Text>
                </Box>
                <Box>
                  <Heading
                    size="xs"
                    fontSize={"1.3rem"}
                    textTransform="uppercase"
                  >
                    Digital Events
                  </Heading>
                  <Text
                    pt="2"
                    fontSize={"1.125rem"}
                    fontWeight={"300"}
                    lineHeight={"120%"}
                    letterSpacing={"0"}
                  >
                    Create Poaps or Digital Collectibles for People attending
                    Twitter spaces Discord Events and Zoom Meetings
                  </Text>
                </Box>
                <Box>
                  <Heading
                    size="xs"
                    fontSize={"1.3rem"}
                    textTransform="uppercase"
                  >
                    Analysis
                  </Heading>
                  <Text
                    pt="2"
                    fontSize={"1.125rem"}
                    fontWeight={"300"}
                    lineHeight={"120%"}
                    letterSpacing={"0"}
                  >
                    With Mint Events attendees only provide their Email address
                    while you airdrop digital collectibles to them Easily
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Box>
      <Box
        display={"flex"}
        w={"80rem"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"2.5rem"}
        paddingTop={"7.5rem"}
        pr={"7.5rem"}
        pb={"3.435rem"}
        pl={"3.435rem"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignSelf={"stretch"}
          gap={"1.25rem"}
        >
          <Text
            fontSize={"2.375rem"}
            fontWeight={"700"}
            lineHeight={"170%"}
            textAlign={"center"}
          >
            Can Be used across 20 different applications
          </Text>
          <Text
            fontSize={"1.125rem"}
            fontWeight={"300"}
            lineHeight={"120%"}
            letterSpacing={"0"}
            textAlign={"center"}
          >
            You can share our link and create Collectibles on more than 20
            digital Events you Create and attend Daily
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        ></Box>
      </Box>
    </>
  );
}

export default Homepage;

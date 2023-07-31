import { Box, Text, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <Box
        bg="#9945FF"
        color="white"
        px={3}
        h={20}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Link as={ReachLink}>
          <Text fontSize={20} fontWeight={600}>
            CEVENTS
          </Text>
        </Link>
        <Text>Connect Wallet</Text>
      </Box>
    </>
  );
}

export default Footer;

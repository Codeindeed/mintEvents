import { Box, Text, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <Box
        bg="#121D21"
        color="white"
        pt={"1.5rem"}
        pr={"3.75rem"}
        pb={"1.5rem"}
        pl={"3.75rem"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        alignSelf={"stretch"}
      >
        <Link as={ReachLink}>
          <Text fontSize={20} fontWeight={600}>
            MINTEVENTS
          </Text>
        </Link>
        <Text>Proudly Done During OPOS HAckathon</Text>
      </Box>
    </>
  );
}

export default Footer;

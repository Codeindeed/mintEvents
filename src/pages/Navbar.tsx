import { Box, Text, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
function Navbar() {
  return (
    <>
      <Box
        display={"flex"}
        p={["1.25rem", "1.23rem"]}
        alignItems={"center"}
        justifyContent={"space-between"}
        alignSelf={"stretch"}
        bg={"#fffe"}
      >
        <Link as={ReachLink}>
          <Text fontSize={20} fontWeight={600}>
            MINTEVENTS
          </Text>
        </Link>
        <WalletMultiButton />
      </Box>
    </>
  );
}

export default Navbar;

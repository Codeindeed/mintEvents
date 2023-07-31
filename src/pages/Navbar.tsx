import { Box, Text, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import {
  WalletModalButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
function Navbar() {
  return (
    <>
      <Box
        bg="tomato"
        color="white"
        p={8}
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
        <WalletMultiButton />
      </Box>
    </>
  );
}

export default Navbar;

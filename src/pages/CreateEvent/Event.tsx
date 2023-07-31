import { useWallet } from "@solana/wallet-adapter-react";
import {
  Box,
  Text,
  Input,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { Form as FormInput, Outlet, useActionData } from "react-router-dom";

function Event() {
  const { publicKey } = useWallet();
  return (
    <Box h={"100%"} p={"3"} w={"100%"}>
      {publicKey && <Outlet />}
      {!publicKey && (
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
              <Text fontSize={"3rem"} color={"blue.700"}>
                Please Connect your Wallet💜
              </Text>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Event;

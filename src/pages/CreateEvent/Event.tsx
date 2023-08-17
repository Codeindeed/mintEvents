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
    <Box h="59rem" p={"1rem"}>
      {publicKey && <Outlet />}
      {!publicKey && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"50rem"}
          mt={"auto"}
          mb={"auto"}
          h={"100%"}
        >
          <Text textAlign={"center"} fontSize={"3rem"} color={"blue.700"}>
            Please Connect your Wallet 💜
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default Event;

import { useRouteError } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
function Errorboundary() {
  const error = useRouteError();
  const toast = useToast();
  if (error) {
    toast({
      title: `${error}`,
      description: error?.message,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    console.log(error);
  }
}

export default Errorboundary;

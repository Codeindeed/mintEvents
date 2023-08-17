import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form as FormInput, useParams, useNavigate } from "react-router-dom";
import createEvent from "../../services/newEvent";
import React from "react";

function Eventform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const [isLoading, setIsloading] = useState(false);
  const toast = useToast();
  const onSubmit = handleSubmit(async (data) => {
    setIsloading(true);
    const id: string = await nanoid(8);
    const Input = {
      id,
      created_at: new Date(data.created_at).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
      walletAddress: params.wallet || "",
      totalNum: data.totalNum,
      image: data.image[0],
      eventName: data.eventName,
      eventDesc: data.eventDesc,
    };
    console.log(Input);
    const events = await createEvent(Input);
    if (!events) {
      toast({
        title: ` ${data?.message}`,
        description: "Couldnt upload Event info",
        status: "info",
        duration: 6000,
        isClosable: true,
      });
    }
    setIsloading(false);
    navigate(-1);
  });

  return (
    <Flex
      as={FormInput}
      method="post"
      gap={3}
      flexDirection={"column"}
      margin={"auto"}
      mt={"6rem"}
      w={"500px"}
      bg={"whiteAlpha.200"}
      p={6}
      onSubmit={onSubmit}
    >
      <FormControl isInvalid={errors?.eventName ? true : false}>
        <FormLabel>Event Name</FormLabel>
        <Input type="text" {...register("eventName", { required: true })} />
        {errors.eventName ? (
          <FormHelperText>Enter the name of the Event</FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors?.created_at ? true : false}>
        <FormLabel>Start Date</FormLabel>
        <Input
          type="date"
          min={new Date().toISOString().split("T")[0]}
          {...register("created_at", { required: true })}
        />
        {errors?.created_at ? (
          <FormHelperText>Enter the start Date for the Event.</FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors?.endDate ? true : false}>
        <FormLabel>End Date</FormLabel>
        <Input
          type="date"
          min={new Date().toISOString().split("T")[0]}
          {...register("endDate", { required: true })}
        />
        {errors.endDate ? (
          <FormHelperText>Enter the End Date for the Event.</FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors?.totalNum ? true : false}>
        <FormLabel>Total Num</FormLabel>
        <Input type="number" {...register("totalNum", { required: true })} />
        {errors?.totalNum ? (
          <FormHelperText>
            Enter Number of people to fill up the event
          </FormHelperText>
        ) : (
          <FormErrorMessage>Number of attendees.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors?.image ? true : false}>
        <FormLabel>Image For Event </FormLabel>
        <Input
          type="file"
          {...register("image", { required: true })}
          accept=".png"
        />
        {errors?.image ? (
          <FormHelperText>Upload Event Image</FormHelperText>
        ) : (
          <FormErrorMessage>Please Upload Event Image.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors?.eventDesc ? true : false}>
        <FormLabel>Event details</FormLabel>
        <Input type="text" {...register("eventDesc", { required: true })} />
        {errors?.eventDesc ? (
          <FormHelperText>Enter details about Event</FormHelperText>
        ) : (
          <FormErrorMessage>Description required.</FormErrorMessage>
        )}
      </FormControl>
      <Button
        bg={"#00A0DC"}
        color={"white"}
        type="submit"
        _hover={{
          bg: "#1183AD",
        }}
        _active={{
          bg: "#00A0DC",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        isLoading={isLoading}
        loadingText={"Creating Event"}
      >
        Submit
      </Button>
    </Flex>
  );
}

export default Eventform;

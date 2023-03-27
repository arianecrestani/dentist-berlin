import React from "react";
// import { Link } from "react-router-dom";
import {
  Input,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Box,
  Button
} from "@chakra-ui/react";

const Inputs = () => {
  const inputStyle = {
    placeholder: "large size",
    size: "lg",
    width: "40rem",
    height: "3rem",
    border: "2px solid",
  };
  return (
    <Flex direction="column" align="center">
      <Box
        backgroundColor="gray.50"
        borderRadius="md"
        padding={8}
        boxShadow="lg"
        p={12}
      >
        <Box>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" style={inputStyle} />
            <FormHelperText>Keep it very short and sweet!</FormHelperText>
            <FormErrorMessage>Your First name is invalid</FormErrorMessage>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" style={inputStyle} />
            <FormHelperText>We'll never share your password.</FormHelperText>
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={4} width="full">
            Login
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Inputs;

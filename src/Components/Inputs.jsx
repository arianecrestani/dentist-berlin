import React from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";

const Inputs = () => {
  const inputStyle = {
    placeholder: "large size",
    size: "lg",
    width: "40rem",
    height: "3rem",
  };
  return (
    <div>
      <Flex direction="column" align="center">
        <Box p={12}>
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
        </Box>
        <Link to={`/register`}>Register</Link>
      </Flex>
    </div>
  );
};

export default Inputs;

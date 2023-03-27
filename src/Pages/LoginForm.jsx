//ra
import React from "react";
import { Link } from "react-router-dom";
import Inputs from "../Components/PasswordInputs";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <Flex direction="column" align="center">
      <Link to={`/`}>Home</Link>
      <Box textAlign="center">
          <Heading as="h1" size="lg" mb={2}>
            Login
          </Heading>
          <Text color="gray.500">Enter your details below</Text>
        </Box>
      <Inputs />
      <Link to={`/register`}>Register</Link>
    </Flex>
  );
};

export default LoginForm;

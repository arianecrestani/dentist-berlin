import React from "react";
import PasswordInputs from "../Components/PasswordInputs";
import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";


const RegisterForm = () => {

  return (
    <div>
      <Navbar />
      <Box textAlign="center">
        <Heading as="h1" size="lg" mb={2}>
          Register
        </Heading>
        <Text color="gray.500">Enter your details below</Text>
      </Box>
      <PasswordInputs functionType={"register"} />
    </div>
  );
};

export default RegisterForm;

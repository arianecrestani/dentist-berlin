import { Link } from "react-router-dom";
import PasswordInputs from "../Components/PasswordInputs";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const LoginForm = () => {
  return (
    <>
      <Navbar />
      <Flex direction="column" align="center">
        <Link to={`/`}>Home</Link>
        <Box textAlign="center">
          <Heading as="h1" size="lg" mb={2}>
            Login
          </Heading>
          <Text color="gray.500">Enter your details below</Text>
        </Box>
        <PasswordInputs functionType={"login"} />
        <Link to={`/register`}>Register</Link>
      </Flex>
    </>
  );
};

export default LoginForm;

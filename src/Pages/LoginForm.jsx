import PasswordInputs from "../Components/PasswordInputs";
import { Flex } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
// import { Box, Heading, Text } from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <>
      <Navbar />
      <Flex direction="column" align="center">
        <PasswordInputs functionType={"login"} />
      </Flex>
    </>
  );
};

export default LoginForm;

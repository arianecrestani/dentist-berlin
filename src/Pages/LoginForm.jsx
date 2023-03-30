import PasswordInputs from "../Components/PasswordInputs";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

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

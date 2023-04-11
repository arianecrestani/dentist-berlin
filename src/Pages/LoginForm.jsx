import PasswordInputs from "../Components/PasswordInputs";
import { Flex, Heading } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import React, { useState } from "react";
// import { Box, Heading, Text } from "@chakra-ui/react";

const LoginForm = () => {
  const [headerForms, setHeaderForms] = useState("");
  const headerStyle = () => {
    if ("login") {
      setHeaderForms(headerForms);
    }
  };
  return (
    <>
      <Navbar />
      <Flex direction="column" align="center">
        {headerForms && (
          <Heading onChange={headerStyle} as="h1" size="lg" mb={2}></Heading>
        )}
        <Heading color="gray.500">Log in</Heading>
        <PasswordInputs functionType={"login"} />
      </Flex>
    </>
  );
};

export default LoginForm;

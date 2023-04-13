import PasswordInputs from "../Components/PasswordInputs";
import { Flex, Heading } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Text, Box, Button } from "@chakra-ui/react";
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
        <Box
          backgroundColor="gray.50"
          borderRadius="md"
          padding={4}
          boxShadow="lg"
          p={12}
          m={20}
        >
          <Box>
            <Flex direction="column" align="center">
              {headerForms && (
                <Heading
                  onChange={headerStyle}
                  as="h1"
                  size="lg"
                  mb={2}
                ></Heading>
              )}
              <Heading color="black">Log in</Heading>
              <PasswordInputs functionType={"login"} />

              <Box alignItems='end'>
                <Flex justifyContent='center' mt={2}>
                  <Link justifyItems='end' to="/resetPassword" alignItems='end'fontSize="sm">Forgot Password?</Link>
                </Flex>

                <Box mt={4} textAlign="center">
                  <Text fontSize="sm">Don't have an account yet?</Text>
                  <Link fontSize="sm" to="/login">
                    Sign up
                  </Link>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default LoginForm;

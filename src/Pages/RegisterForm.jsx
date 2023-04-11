import React, { useState } from "react";
import PasswordInputs from "../Components/PasswordInputs";
import { Box, Heading, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const RegisterForm = () => {
  const [headerForms, setHeaderForms] = useState("");

  const headerStyle = () => {
    if ("register") {
      setHeaderForms(headerForms);
    }
  };

  return (
    <div>
      <Navbar />

      <Box textAlign="center">
        {headerForms && (
          <Heading onChange={headerStyle} as="h1" size="lg" mb={2}>
            Sing-up
          </Heading>
        )}
        <Heading color="gray.500">Sing-up</Heading>
      </Box>

      <PasswordInputs functionType={"register"} />
    </div>
  );
};

export default RegisterForm;

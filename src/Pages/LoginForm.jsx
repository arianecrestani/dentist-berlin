//ra
import React from "react";
import { Link } from "react-router-dom";
import Inputs from "../Components/PasswordInputs";
import { Flex } from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <Flex direction="column" align="center">
      <Link to={`/`}>Home</Link>
      <Inputs />
      <Link to={`/register`}>Register</Link>
    </Flex>
  );
};

export default LoginForm;

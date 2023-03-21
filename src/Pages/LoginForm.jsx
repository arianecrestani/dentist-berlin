//ra
import React from "react";
import { Link } from "react-router-dom";
import Inputs from "../Components/Inputs";
import { Flex } from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <div>
      <Flex direction="column" align="center">
        <Link to={`/`}>Home</Link>
        <Inputs />
        <Link to={`/register`}>Register</Link>
      </Flex>
    </div>
  );
};

export default LoginForm;

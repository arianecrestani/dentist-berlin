import React, { useEffect } from "react";
import { useState, useContext } from "react";
import {
  Text,
  Input,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Box,
  Button,
} from "@chakra-ui/react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const PasswordInputs = ({ functionType }) => {
  const { createNewUser, logIn, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (functionType === "register") {
      createNewUser(email, password);
      setEmail("");
      setPassword("");
    }
    if (functionType === "login") {
      logIn(email, password);
      setEmail("");
      setPassword("");
    }
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const inputStyle = {
    placeholder: "large size",
    size: "lg",
    width: "40rem",
    height: "3rem",
    border: "2px solid",
  };
  return (
    <>
      <Box>
        <FormControl onSubmit={handleSubmit}>
          <FormLabel>Email</FormLabel>
          <Input
            onChange={handleEmailChange}
            value={email}
            type="email"
            style={inputStyle}
          />
          <FormHelperText>Keep it very short and sweet!</FormHelperText>
          <FormErrorMessage>Your First name is invalid</FormErrorMessage>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
            style={inputStyle}
          />
          <FormHelperText>We'll never share your password.</FormHelperText>
        </FormControl>
        <Button
          onClick={handleSubmit}
          type="submit"
          bg="teal.300"
          mt={2}
          width="full"
        >
          Login
        </Button>
      </Box>
    </>
  );
};

export default PasswordInputs;

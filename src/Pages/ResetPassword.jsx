import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Flex,
  FormErrorMessage,
  Heading,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export const ResetPassword = () => {
  const { resetPassword } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (email.length > 1) {
      alert("you have reset your password");
      resetPassword(email);
      setSuccess(true);
    } else {
      console.log("something wrong with email");
      alert("fill out");
      setSuccess(false);
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <Flex direction="column" align="center">
      <Box
        backgroundColor="gray.50"
        borderRadius="md"
        padding={4}
        boxShadow="lg"
        p={12}
        m={20}
      >

        <FormControl onSubmit={handleResetPassword}>
          <FormLabel>Email</FormLabel>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            style={{ marginBottom: "1rem" }}
            isDisabled={isLoading || success}
          />
          <Button
            onClick={handleResetPassword}
            type="submit"
            colorScheme="blue"
            mt={4}
            width="full"
            isDisabled={isLoading || success}
          >
            Reset Password
          </Button>
          {success && (
            <Box mt={20}>
              <FormHelperText color="green.800">
                Password reset link sent to your email.
              </FormHelperText>
            </Box>
          )}
          {error && (
            <Box mt={4}>
              <FormErrorMessage>{error}</FormErrorMessage>
            </Box>
          )}
        </FormControl>
      </Box>
    </Flex>
  );
};

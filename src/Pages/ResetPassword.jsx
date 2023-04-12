import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Flex,
} from "@chakra-ui/react";

export const ResetPassword = () => {
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
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" style={{ marginBottom: "1rem" }} />
          <Button type="submit" colorScheme="blue" mt={4} width="full">
            Reset Password
          </Button>

          <Box mt={4}>
            <FormHelperText color="green.500">
              Password reset link sent to your email.
            </FormHelperText>
          </Box>

          <Box mt={4}></Box>
        </FormControl>
      </Box>
    </Flex>
  );
};

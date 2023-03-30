import React from "react";
import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
export const Comment = () => {

  const addComment = () => {

  }

  return (
    <div>
      <Box bg="blue.300" position="fixed" bottom="0" left="0" right="0">
        <Box margin="5rem" borderWidth="2px" borderRadius="lg" p="20">
          <Text fontSize="xl" fontWeight="bold" mb="2">
            Feedback
          </Text>
          <Stack  spacing="4">
            <Box p="2" bg="gray.100" borderRadius="md">
              <Text fontSize="md"></Text>
            </Box>
            <Flex>
              <Input mr="4" placeholder="Leave a comment" />
              <Button colorScheme="blue" onClick={addComment}>Add</Button>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

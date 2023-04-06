import React from "react";
import { Box, Avatar, Flex, Heading, Text } from "@chakra-ui/react";

export const DentistInfo = ({item}) => {
  return (
    <Flex justifyContent="center" p={4}>
      <Avatar name={item.tags.name} src="https://bit.ly/broken-link" />
      <Box ml={3}>
        <Heading as="h2" size="md">
          {item.tags.name}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          {item.tags["addr:street"]} {item.tags["addr:housenumber"]},
          {item.tags["addr:city"]} {item.tags["addr:postcode"]}
        </Text>
      </Box>
    </Flex>
  );
};

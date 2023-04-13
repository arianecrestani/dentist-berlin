import React, { useEffect } from "react";
import {
  Box,
  HStack,
  Stack,
  Button,
  Avatar,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DentistDetail } from "./DentistDetail";
import { Comment } from "./Comment";
import { Collapse } from "@chakra-ui/react";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";
import { Favorite } from "./Favorite";

export const Dentist = ({ item, index, feedback, favorite }) => {
  const [showMore, setShowMore] = useState(false);

  const { user } = useContext(AuthContext);

  const toggleShowMore = () => {
    if (user) {
      setShowMore(!showMore);
    }
  };
  const [openCart, setOpenCart] = useState({ open: false, dentist: {} });

  const handleOpen = (item) => {
    setOpenCart({ open: true, dentist: item.tags });
  };

  return (
    <Box
      maxW="xl"
      minW="2xl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
      p="14"
      m="4"
      bg="teal.300"
    >
      <Flex justifyContent="center" p={8} >
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
      <Flex display="flex" justifyContent="center" p={4}>
        <Favorite alignItems="center" item={item} favorite={favorite} />
      </Flex>
      <Divider p={2} />
      <Box p={4}>
        <Collapse in={showMore}>
          <Box display="flex" justifyContent="end">
            <HStack p={4} bg="white">
              <Comment feedback={feedback} item={item} />
            </HStack>
          </Box>
        </Collapse>
        <DentistDetail
          isOpen={openCart.open}
          onOpen={() => setOpenCart({ open: true, dentist: openCart.dentist })}
          onClose={() => setOpenCart({ open: false, dentist: {} })}
          dentist={openCart.dentist}
        />

        <Stack
          direction="row"
          spacing={8}
          align="center"
          justifyContent="center"
        >
          <Button
            onClick={() => handleOpen(item)}
            background="yellow.200"
            variant="outline"
            m={6}
          >
            Dentist Details
          </Button>
          <>
            {user ? (
              <Button
                background="yellow.200"
                variant="outline"
                onClick={toggleShowMore}
              >
                {showMore ? "Hidden" : "Write a feedback"}
              </Button>
            ) : (
              <Button
                background="yellow.200"
                variant="outline"
                as={Link}
                to="/login"
              >
                Write a feedback
              </Button>
            )}
          </>
        </Stack>
      </Box>
    </Box>
  );
};

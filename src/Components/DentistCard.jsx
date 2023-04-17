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
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const Dentist = ({ item, feedback, favorite, users }) => {
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
      maxW="900px"
      minW="900px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
      p="14"
      m="10"
      bg="teal.300"
    >
      <Flex justifyContent="center" alignItems="center" p={4}>
        <Avatar
          name={item.tags.name}
          src="https://bit.ly/broken-link"
          size="xl"
        />
        <Box ml={8} >
          <Heading as="h2" size="lg">
            {item.tags.name}
          </Heading>
          <Text fontSize="md" color="white" mt={4}>
            {item.tags["addr:street"]} {item.tags["addr:housenumber"]}{" "}
            {item.tags["addr:city"]} {item.tags["addr:postcode"]}{" "}
            {item.tags["addr:suburb"]}
          </Text>
          <HStack mt={2} spacing={2}>
            {item.tags.phone && (
              <>
                <FontAwesomeIcon icon={faPhone} color="teal" />
                <Text fontSize="md" color="white">
                  {item.tags.phone}
                </Text>
              </>
            )}
            {item.tags.wheelchair && (
              <>
                <FontAwesomeIcon icon={faWheelchair} color="teal" />
                <Text fontSize="md" color="white">
                  {item.tags.wheelchair}
                </Text>
              </>
            )}
            {item.tags.opening_hours && (
              <>
                <FontAwesomeIcon icon={faClock} color="teal" />
                <Text fontSize="md" color="white">
                  {item.tags.opening_hours}
                </Text>
              </>
            )}
          </HStack>
        </Box>
      </Flex>
      <Divider p={2} />
      <Box p={4}>
        <Collapse in={showMore}>
          <Box display="flex" justifyContent="center" p={8}>
            <HStack p={4} bg="white">
              <Comment feedback={feedback} item={item} users={users} />
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
        <Flex display="flex" justifyContent="center" p={4}>
          <Favorite alignItems="center" item={item} favorite={favorite} />
        </Flex>
      </Box>
    </Box>
  );
};

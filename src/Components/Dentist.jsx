import React, { useEffect } from "react";
import { Box, HStack, Stack, Button, Avatar, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HoursDetail } from "./HoursDetail";
import { Comment } from "./Comment";
import { Collapse } from "@chakra-ui/react";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../fbConfig";
import LoginForm from "../Pages/LoginForm";

export const Dentist = ({ item, index, feedback }) => {
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
      margin="4rem"
      maxW="30rem"
      minW="70rem"
      padding="2rem"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
      bg="white"
      key={index}
      fontSize="xl"
      fontWeight="bold"
    >
      <Divider orientation="horizontal" />

      <Stack padding={10} spacing={10}>
        <HStack spacing={7}>
          <Avatar size="lg" name="Dentist" src="https://bit.ly/broken-link" />
          <div padding="10px">{item.tags.name}</div>
        </HStack>

        <HStack>
          <div margin="10px">{item.tags["addr:street"]}</div>
          <div>{item.tags["addr:housenumber"]}</div>
          <div>{item.tags["addr:city"]}</div>
          <div>{item.tags["addr:postcode"]}</div>
        </HStack>

        <Collapse in={showMore}>
          <Box display="flex" justifyContent="end">
            <HStack>
              <Comment feedback={feedback} item={item} />
            </HStack>
          </Box>
        </Collapse>

        <HoursDetail
          isOpen={openCart.open}
          onOpen={() => setOpenCart({ open: true, dentist: openCart.dentist })}
          onClose={() => setOpenCart({ open: false, dentist: {} })}
          dentist={openCart.dentist}
        />
        <Stack direction="row" spacing={4} align="center">
          <Button
            onClick={() => handleOpen(item)}
            background="yellow.200"
            variant="outline"
          >
            Aviability
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
        <Divider orientation="horizontal" />
      </Stack>
    </Box>
  );
};

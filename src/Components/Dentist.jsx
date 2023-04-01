import React from "react";
import { Box, HStack, Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HoursDetail } from "./HoursDetail";
import { Comment } from "./Comment";
import { Collapse } from "@chakra-ui/react";

export const Dentist = ({ item, index }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
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
      <Stack padding={14}>
        <div padding="10px">{item.tags.name}</div>
        <HStack>
          <div margin="10px">{item.tags["addr:street"]}</div>
          <div>{item.tags["addr:housenumber"]}</div>
          <div>{item.tags["addr:city"]}</div>
          <div>{item.tags["addr:postcode"]}</div>
        </HStack>

        <Collapse in={showMore}>
          <Box display="flex" justifyContent="end">
            <HStack>
              <Comment item={item} index={index} />
            </HStack>
          </Box>
        </Collapse>

        <Stack direction="row" spacing={4} align="center">
          <HoursDetail
            isOpen={openCart.open}
            onOpen={() =>
              setOpenCart({ open: true, dentist: openCart.dentist })
            }
            onClose={() => setOpenCart({ open: false, dentist: {} })}
            dentist={openCart.dentist}
          />
          <Button
            onClick={() => handleOpen(item)}
            background="yellow.200"
            variant="outline"
          >
            Aviability
          </Button>
          <Button
            background="yellow.200"
            variant="outline"
            onClick={toggleShowMore}
          >
            {showMore ? "Hidden" : "write a feedback"}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

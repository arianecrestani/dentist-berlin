import React from "react";
import { Box, HStack, Stack, Button } from "@chakra-ui/react";

// import { Link } from "react-router-dom";

import { useState } from "react";
import { HoursDetail } from "./HoursDetail";

export const Dentist = ({ item, index }) => {
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
      {/* <div> {item.tags.amenity}</div> */}
  

      <Stack padding={14}>
        <div padding="10px">{item.tags.name}</div>
        <HStack>
          <div margin="10px">{item.tags["addr:street"]}</div>
          <div>{item.tags["addr:housenumber"]}</div>
          <div>{item.tags["addr:city"]}</div>
          <div>{item.tags["addr:postcode"]}</div>
        </HStack>
        {/* <Link to={`/forum`}>Forum</Link> */}
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
          >open</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

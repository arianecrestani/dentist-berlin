import React from 'react'
import { Box, HStack, Stack, Button } from "@chakra-ui/react";
import Calendar from '../Pages/Calendar';
import { Link } from 'react-router-dom';
import { Comment } from './Comment';

export const Dentist = ({ item, index }) => {
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
    <Box display='flex' justifyContent='end'>
      <HStack>
        <Calendar />
        <Comment item={item} index={index}/>
      </HStack>
    </Box>

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
        <Button background="yellow.200" variant="outline">
          <Link to={`/login`}>Book apointment</Link>
        </Button>
      </Stack>
    </Stack>
  </Box>
  )
}

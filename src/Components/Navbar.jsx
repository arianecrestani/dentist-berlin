import React from "react";
import { Link } from "react-router-dom";
import { Box, HStack, Stack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <>
      <Box display="flex" padding={30}>
        <HStack padding={10} spacing={20}>
          <Link to={`/`}>Home</Link>
          <Link to={`/login`}>Login</Link>
        </HStack>
      </Box>
      <Stack padding={10} spacing={20}>
        <SearchInput placeholder="Search for dentist " />
      </Stack>
    </>
  );
};

export default Navbar;

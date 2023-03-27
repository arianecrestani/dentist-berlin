import React from "react";
import { Link } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
      <Box display="flex">
        <HStack padding={10} spacing={20}>
          <Link to={`/`}>Home</Link>
          <Link to={`/login`}>Login</Link>
        </HStack>
      </Box>

  );
};

export default Navbar;

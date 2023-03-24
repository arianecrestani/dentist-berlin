import React from "react";
import { Link } from "react-router-dom";
import { Box, HStack, Stack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";


const Navbar = ({ control, setDentists }) => {
  return (
    <>
      <Box display="flex">
        <HStack padding={10} spacing={20}>
          <Link to={`/`}>Home</Link>
          <Link to={`/login`}>Login</Link>
        </HStack>
      </Box>
      <Box >
        <SearchInput control={control} setDentists={setDentists} placeholder="Search for dentist " />
      </Box>
    </>
  );
};

export default Navbar;

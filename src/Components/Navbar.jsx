import React from "react";
import { Link } from "react-router-dom";
import { Box, HStack, Flex, Text, Spacer } from "@chakra-ui/react";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  //para cada id tera uma lista de review

  return (
    <Box bg="white" color="black"  fontWeight="bold">
      <Flex padding={5} alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          Dentist Web Page
        </Text>
        <Spacer />
        <Box display="flex">
          <HStack spacing={10}>
            <Link to={`/`}>Home</Link>

            {user ? (
              <>
                <Link onClick={logOut}>Logout</Link>
                <p>{user.email}</p>
                <Link to="/user">User</Link>
              </>
            ) : (
              <>
                <Link to={`/register`}>Register</Link>
                <Link to="/login">Log in</Link>
              </>
            )}
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;

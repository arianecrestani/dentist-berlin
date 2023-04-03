import React from "react";
import { Link } from "react-router-dom";
import { Box, HStack, Flex, Text, Spacer } from "@chakra-ui/react";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";
import { UserArea } from "../Pages/UserArea";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  //para cada id tera uma lista de review

  return (
    <Box bg="white" color="blue.500">
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
                <button onClick={logOut}>Logout</button>
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

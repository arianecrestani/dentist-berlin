import React from "react";
import { Link } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";
import { UserArea } from "../Pages/UserArea";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  //para cada id tera uma lista de review

  return (
    <Box display="flex">
      <HStack padding={10} spacing={20}>
        <Link to={`/`}>Home</Link>

        {user ? (
          <>
            <button onClick={logOut}>Logout</button>
            <p>{user.email}</p>
            <Link to="/login">
              user
            </Link>
          </>
        ) : (
          <>
            <Link to={`/register`}>Register</Link>
            <Link to="/login">Log in</Link>
          </>
        )}
      </HStack>
    </Box>
  );
};

export default Navbar;

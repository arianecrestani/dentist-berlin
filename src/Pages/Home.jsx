import { Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={`/login`}>Login</Link>
      <Stack spacing={3}></Stack>
    </div>
  );
};

export default Home;

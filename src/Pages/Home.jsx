import { Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={`/login`}> ACESS HERE</Link>
      <Stack></Stack>
      <Link to={`/register`}> ACESS HERE</Link>
    </div>
  );
};

export default Home;

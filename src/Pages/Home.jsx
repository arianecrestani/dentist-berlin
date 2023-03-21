import { Stack } from "@chakra-ui/react";
// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  console.log('process.env.REACT_APP_APIKEY', process.env.REACT_APP_APIKEY)
  const [recipes, setRecipes] = useState([]);

  const getApiData = async () => {
    let recipe = "Vegetarian";

    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?diet=${recipe}&apiKey=${process.env.REACT_APP_APIKEY}`
    );
    const data = await response.json();

    console.log(data.results);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <div>
        <Link to={`/login`}>Login</Link>
        <Stack spacing={3}></Stack>
      </div>
    </div>
  );
};

export default Home;

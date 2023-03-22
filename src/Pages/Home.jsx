import { Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [dentists, setDentists] = useState([]);

  const getApiData = async (
    term,
    location,
    categories,
    sort_by,
    price,
    open_now,
    attributes
  ) => {
    const apikey =
      "DH92QGA5D6MZ90_BUPFU1YFzrXMhIKugwfMvlHXZ2NLzcx7r5A0-iRABaEV541QfRvr_zlg_ZxUxFpJR0Op_58SbfuO6ui_3OmvIPXtCyI_qUOHqndHh9yRu9CMaZHYx";
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&categories=${categories}&sort_by=${sort_by}&price=${price}&open_now=${open_now}&attributes=${attributes}`;
    const urlv =
      "https://api.yelp.com/v3/businesses/search?term=dentists&location=berlin&categories=dentists&sort_by=rating&locale=de_DE";
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer DH92QGA5D6MZ90_BUPFU1YFzrXMhIKugwfMvlHXZ2NLzcx7r5A0-iRABaEV541QfRvr_zlg_ZxUxFpJR0Op_58SbfuO6ui_3OmvIPXtCyI_qUOHqndHh9yRu9CMaZHYx");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      const response = await fetch(urlv, requestOptions);
      const data = await response.json();
      setDentists(data.businesses);
      console.log(data.businesses);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getApiData("dentists", "berlin", "dentists", "rating", "de_DE");
  }, []);

  return (
    <div>
      <div>{dentists && dentists.map((item) => <li>{item.alias}</li>)}</div>
      <div>
        <Link to={`/login`}>Login</Link>
        <Stack spacing={3}></Stack>
      </div>
    </div>
  );
};

export default Home;

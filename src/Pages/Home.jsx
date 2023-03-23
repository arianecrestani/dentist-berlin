import { Box, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const [control, setControl] = useState([])

  const [loading, setLoading] = useState(false);
  const getApiData = async () => {
    const testUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:3000,52.516275,13.377704)[amenity=dentist];out;`;

    fetch(testUrl)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setControl(data.elements)
        setDentists(data.elements);
        console.log(data.elements)
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);

    getApiData();
  }, []);

  return (
    <Box bg="#38B2AC" width="100%" height="50vh">
      <Navbar control={control} setDentists={setDentists}/>
      {loading && <Spinner color="red.500" />}
      <Box>
        {dentists.map((item, index) => (
          <li key={index}>
            {item.tags.amenity} {item.tags.name} --- {item.tags["addr:street"]}
          </li>
        ))}
      </Box>
    </Box>
  );
};

export default Home;

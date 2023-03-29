import { Box, Flex, HStack, Image, Stack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import Calendar from "./Calendar";

import { Link } from "react-router-dom";
import banner from "../banner.png";
import Navbar from "../Components/Navbar";
import SearchDentists from "../Components/SearchDentists";

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const [control, setControl] = useState([]);
  const [loading, setLoading] = useState(false);
  const getApiData = async () => {
    const testUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:3000,52.516275,13.377704)[amenity=dentist];out;`;

    fetch(testUrl)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setControl(data.elements);
        setDentists(data.elements);
        console.log(data.elements);
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
  // const hasDentist = dentists.length > 0;

  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <Image
          max-width="100%"
          boxSize="full"
          min-width="100%"
          objectFit="cover"
          zIndex="-1"
          src={banner}
          alt="Dan Abramov"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            top: "30%",
            left: "30%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <SearchDentists
            control={control}
            setDentists={setDentists}
            placeholder="Search for dentist "
          />
        </div>
      </div>
      {loading && <Spinner color="red.500" />}

      {/* <Box bg="#EEFBFA" marginBlock={300}> */}
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        display="flex"
        padding="2rem"
      >
        {dentists.map((item, index) => (
          <Box
            margin="4rem"
            maxW="30rem"
            minW="70rem"
            padding="2rem"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="sm"
            bg="white"
            key={index}
            fontSize="xl"
            fontWeight="bold"
          >
            {/* <div> {item.tags.amenity}</div> */}
            <Box display='flex' justifyContent='end'>
              <HStack>
                <Calendar />
              </HStack>
            </Box>

            <Stack padding={14}>
              <div padding="10px">{item.tags.name}</div>
              <HStack>
                <div margin="10px">{item.tags["addr:street"]}</div>
                <div>{item.tags["addr:housenumber"]}</div>
                <div>{item.tags["addr:city"]}</div>
                <div>{item.tags["addr:postcode"]}</div>
              </HStack>
              <Link to={`/forum`}>Forum</Link>
              <Stack direction="row" spacing={4} align="center">
                <Button background="yellow.200" variant="outline">
                  <Link to={`/calendar`}>Book apointment</Link>
                </Button>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Flex>
      {/* </Box> */}
    </>
  );
};

export default Home;

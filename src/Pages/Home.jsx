import { Box, Stack, Flex, StackDivider, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

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

  return (
    <>
      <Box bg="#01CFC9" width="100%" height="70vh">
        <Navbar control={control} setDentists={setDentists} />
        {loading && <Spinner color="red.500" />}

        <Box bg="#EEFBFA" marginBlock={300}>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            display="flex"
            // margin="9rem"
            padding="2rem"
          >
            {dentists.map((item, index) => (
              <Box
                margin="2rem"
                maxW="20rem"
                minW="50rem"
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
                {item.tags.amenity}
                {item.tags.name} --
                {item.tags["addr:street"]}
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Home;

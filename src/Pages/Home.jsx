import { Flex, Image, Box } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import banner from "../banner.png";
import Navbar from "../Components/Navbar";
import SearchDentists from "../Components/SearchDentists";
import { Dentist } from "../Components/DentistCard";
import { db } from "../fbConfig";
import { collection, getDocs } from "firebase/firestore";
import { AuthContext } from "../Contexts/AuthContext";
import { where } from "firebase/firestore";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [dentists, setDentists] = useState([]);
  const [control, setControl] = useState([]);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState([]);
  const [favorite, setFavorite] = useState([]);

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

  const getFavorite = async () => {
    const querySnapshot = await getDocs(
      collection(db, "favorite"),
      where("userId", "==", user.uid)
    );
    const favoriteArray = [];
    querySnapshot.forEach((doc) => {
      const singleFavorite = {
        id: doc.id,
        ...doc.data(),
      };
      favoriteArray.push(singleFavorite);
    });
    setFavorite(favoriteArray);
    console.log("favorites", favoriteArray);
  };

  const getFeedback = async () => {
    const querySnapshot = await getDocs(collection(db, "feedback"));
    const feedbackArray = [];
    querySnapshot.forEach((doc) => {
      const singleFeedback = {
        id: doc.id,
        ...doc.data(),
      };

      feedbackArray.push(singleFeedback);
    });
    setFeedback(feedbackArray);
  };

  useEffect(() => {
    getFeedback();
  }, []);

  useEffect(() => {
    if (user) {
      getFavorite();
    }
  }, [user]);

  useEffect(() => {
    setLoading(true);

    getApiData();
  }, []);

  return (
    <>
      <Navbar />
      <Box bg="teal.300" py={4} borderRadius="lg">
        <Flex justifyContent="center" display="flex" flexDirection="wrap">
          <SearchDentists
            control={control}
            setDentists={setDentists}
            placeholder="Search for dentist "
            display="flex"
            flexDirection="row"
            
          />
        </Flex>
      </Box>

      {loading && <Spinner color="red.500" />}

      <Box>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          {dentists.map((item, index) => (
            <Dentist
              key={index}
              item={item}
              index={index}
              feedback={feedback}
              favorite={favorite}
            />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Home;

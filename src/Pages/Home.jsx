import { Flex, Image, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import Calendar from "./Calendar";
// import { Link } from "react-router-dom";
import banner from "../banner.png";
import Navbar from "../Components/Navbar";
import SearchDentists from "../Components/SearchDentists";
import { Dentist } from "../Components/Dentist";
import { db } from "../fbConfig";
import { collection, getDocs } from "firebase/firestore";


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
        // console.log(data.elements);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  const [feedback, setFeedback] = useState([])
  const getFeedback = async () => {
    const querySnapshot = await getDocs(collection(db, "feedback"));
    const feedbackArray = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const singleFeedback = { 
        id : doc.id,
        ...doc.data()
      }
      
      feedbackArray.push(singleFeedback)
      
      // console.log(doc.id, " => ", doc.data());
    });
    setFeedback(feedbackArray)
  };

  useEffect(() => {
    getFeedback();
  }, []);

  useEffect(() => {
    setLoading(true);

    getApiData();
  }, []);

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

      <Box bg="#EEFBFA" >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          display="flex"
          padding="2rem"
        >

          {dentists.map((item, index) => (
              <Dentist
              
                key={index}
                item={item}
                index={index}
                feedback={feedback}
              />
              
            
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Home;

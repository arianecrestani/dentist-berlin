import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../fbConfig";
import { AuthContext } from "../Contexts/AuthContext";
import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { Favorite } from "../Components/Favorite";

export const UserArea = () => {
  const { user } = useContext(AuthContext);

  const [favoriteShows, setFavoriteShows] = useState([]);

  useEffect(() => {
    const fetchFavoriteShows = async () => {
      if (user) {
        const likesRef = collection(db, "favorite");
        const likesQuery = query(likesRef, where("userID", "==", user.uid));
        const snapshot = await getDocs(likesQuery);
        const favorites = snapshot.docs.map((doc) => doc.data());
        setFavoriteShows(favorites);
      }
    };


    fetchFavoriteShows();
  }, [user]);

  return (
    <div>
      <Navbar />
      {user && (
        <Flex justifyContent="center" p={10}>
          <Flex direction="column">
            {favoriteShows.map((dentist, item, favorite) => (
              <div key={dentist.dentistID}>
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  m="2"
                  p="10"
                  bg="teal.300"
                >
                  <Flex align="center">
                    <Avatar size="md" name={dentist.name} mr="4" />
                    <Box>
                      <Heading as="h3" size="md">
                        {dentist.name}
                      </Heading>
                      <Text fontSize="sm">
                        {dentist.city}, {dentist.street}
                      </Text>
                    </Box>
                    <Flex display="flex" justifyContent="center" p={4}>
                      <Favorite
                        alignItems="center"
                        item={item}
                        favorite={favorite}
                      />
                    </Flex>
                  </Flex>
                </Box>
              </div>
            ))}
          </Flex>
        </Flex>
      )}
    </div>
  );
};

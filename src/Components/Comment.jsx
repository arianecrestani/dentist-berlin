import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { AuthContext } from "../Contexts/AuthContext";
import { collection, addDoc, getDocs2 } from "firebase/firestore";
import { db } from "../fbConfig";
import { Dentist } from "./Dentist";

export const Comment = ({ item, index }) => {
  const { user } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date().toDateString();
    const newMessage = {
      author: user.email,
      text: inputValue,
      date: date,
      dentist: item.id,
    };
    
    if (inputValue === "") {
      alert("please fill out");
    } else {
      try {
        const docRef = await addDoc(collection(db, "feedback"), newMessage);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    console.log(newMessage);
  };
  useEffect(() => {});

  return (
    <div>
      <Box bg="blue.300">
        <Box borderWidth="2px" borderRadius="lg" p="20">
          <Text fontSize="xl" fontWeight="bold" mb="2">
            Feedback
          </Text>
          <Stack spacing="4">
            <Box p="2" bg="gray.100" borderRadius="md">
              <Text fontSize="md"></Text>
            </Box>
            <Flex>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                mr="4"
                placeholder="Leave a comment"
              />
              <Button colorScheme="blue" type="submit" onClick={handleSubmit}>
                Add
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Text,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import { AuthContext } from "../Contexts/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../fbConfig";
// import { Dentist } from "./Dentist";

export const Comment = ({ feedback, item }) => {
  const { user } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState("");
  const [feedbackAuthor, setFeedbackAuthor] = useState(null);
  const [dentistFeedback, setDentistFeedback] = useState([]);
  // const [mensage, setMenssage] = useState([])

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
        const authorName = newMessage.author;
        const textComment = newMessage.text;
        const feedbackDate = newMessage.date;

        const docRef = await addDoc(collection(db, "feedback"), newMessage);
        setFeedbackAuthor(`${authorName} ${textComment} ${feedbackDate}`);
        setInputValue("");

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("try again");
      }
    }
    console.log(newMessage);
  };

  useEffect(() => {
    if (feedback.length > 0) {
      const filterFeedback = feedback.filter((fb) => fb.dentist === item.id);
      setDentistFeedback(filterFeedback);
    }
  }, [feedback]);

  return (
    <div>
      <Stack>
        <Box borderWidth="1px" borderRadius="lg" p="4">
          {dentistFeedback.map((dentist) => {
            const comment = `${dentist.author} ${dentist.text} ${dentist.date}`;
            return (
              <Flex key={dentist.id} borderWidth="1px" borderRadius="lg" p="4">
              <Avatar name={dentist.author} src="https://bit.ly/broken-link" />
              <Box ml="4">
                <Text fontWeight="bold">{dentist.author}</Text>
                <Text fontSize="md">{comment}</Text>
              </Box>
            </Flex>
            );
          })}
        </Box>
      </Stack>
      <Box>
        <Box borderWidth="2px" borderRadius="lg" p="20">
          <Text fontSize="xl" fontWeight="bold" mb="2">
            Feedback
          </Text>
          <Stack spacing="4">
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

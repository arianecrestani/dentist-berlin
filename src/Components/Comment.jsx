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
import { collection, addDoc, deleteDoc, doc, docId } from "firebase/firestore";
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
        // setIsUser()

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("try again");
      }
    }
    console.log(newMessage);
  };

  const handleDelete = async (docId) => {
    try {
      if (!docId) {
        throw new Error("docId is undefined");
      }
      await deleteDoc(doc(db, "feedback", docId));
      setDentistFeedback(
        dentistFeedback.filter((feedback) => feedback.id !== docId)
      );

      // setIsUser(true)
    } catch (e) {
      console.error("Error deleting document: ", e);
      alert("try again");
    }
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
          {dentistFeedback && user &&
            dentistFeedback.map((feedback) => {
              const comment = `${feedback.author} ${feedback.text} ${feedback.date}`;

              const canDelete = feedback.author === user.email;

              return (
                <Flex
                  key={feedback.id}
                  borderWidth="1px"
                  borderRadius="lg"
                  p="4"
                >
                  <Avatar
                    name={feedback.author}
                    src="https://bit.ly/broken-link"
                  />
                  <Box ml="4">
                    <Text fontWeight="bold">{feedback.author}</Text>
                    <Text fontSize="md">{comment}</Text>
                    {canDelete && user && (
                      <Button
                        colorScheme="red"
                        size="sm"
                        mt="2"
                        onClick={() => handleDelete(feedback.id)}
                      >
                        Delete
                      </Button>
                    )}
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
            <Flex justifyContent="center">
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

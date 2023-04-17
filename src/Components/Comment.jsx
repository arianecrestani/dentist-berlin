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
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../fbConfig";

export const Comment = ({ feedback, item }) => {
  const { user } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState("");
  const [dentistFeedback, setDentistFeedback] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // find the name of the user in the user collection by email.
    const date = new Date().toDateString();
    // const name = await getUserByEmail(user.userID)
    const newMessage = {
      userEmail: user.email,
      userName: user.displayName,
      userId: user.uid,
      date: date,
      dentist: item.id,
      text: inputValue,
    };

    if (inputValue === "") {
      alert("please fill out");
    } else {
      try {
        const name = newMessage.userName;
        const textComment = newMessage.text;
        const feedbackDate = newMessage.date;

        const docRef = await addDoc(collection(db, "feedback"), newMessage); //retorna o que ja foi criado só que com um id para essa colecao de objetos que foi criada
        setDentistFeedback([
          ...dentistFeedback,
          {
            id: docRef.id,
            name: name,
            text: textComment,
            date: feedbackDate,
          },
        ]);
        console.log(docRef);
        setInputValue("");

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("try again");
      }
    }
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
    <Flex
      alignItems="center"
      justifyContent="center"
      justifyItems="center"
      justifySelf="center"
    >
      <Stack alignItems="center" spacing="8">
        <Box borderWidth="1px" borderRadius="lg" p="10">
          {dentistFeedback &&
            user &&
            dentistFeedback.map((feedback) => {
              const comment = `${feedback.name}${feedback.text} ${feedback.date} `;

              // const canDelete = feedback.userName === user.email;

              return (
                <Flex
                  key={feedback.id}
                  borderWidth="1px"
                  borderRadius="lg"
                  p="10"
                  background="white"
                >
                  <Avatar
                    name={feedback.name}
                    src="https://bit.ly/broken-link"
                  />
                  <Box ml="12">
                    <Text fontWeight="bold">{feedback.name}</Text>
                    <Text fontSize="md">{comment}</Text>
                    {/* {canDelete && user && (
                      <Button
                        background="yellow.200"
                        size="sm"
                        mt="2"
                        onClick={() => handleDelete(feedback.id)}
                      >
                        Delete
                      </Button>
                    )} */}
                  </Box>
                </Flex>
              );
            })}
        </Box>

        <Box borderWidth="2px" borderRadius="lg" p="18" width="full">
          <Text fontSize="xl" fontWeight="bold" mb="10">
            Feedback
          </Text>
          <Stack spacing="8">
            <Flex justifyContent="center">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                mr="4"
                height={10}
                width="full"
                placeholder="Leave a comment"
              />

              <Button
                background="yellow.200"
                type="submit"
                onClick={handleSubmit}
              >
                Add
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

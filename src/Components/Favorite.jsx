import React, { useState, useContext, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../fbConfig";
import { Button } from "@chakra-ui/react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export const Favorite = ({ item, favorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const name = item.tags.name
    const city = item.tags["addr:city"];
    const userID = user.uid;
    const street = item.tags["addr:street"];
    const dentistID = item.id;
    

    const likesRef = collection(db, "favorite");
    const likesQuery = query(
      likesRef,

      where("userID", "==", userID),
      where("dentistID", "==", dentistID)
    );

    const snapshot = await getDocs(likesQuery);
    const emptyArray = [];
    snapshot.forEach((item) => emptyArray.push(item.data()));
      console.log(emptyArray)
    if (emptyArray.length === 0) {
      const newFavorite = {
        name: name,
        city: city,
        userID: userID,
        street: street,
        dentistID: dentistID,
       
      };

      try {
        const docRef = await addDoc(collection(db, "favorite"), newFavorite);
        setIsFavorite(true);

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("try again");
      }
    } else {
      snapshot.forEach((doc) => {
        deleteDoc(doc.ref);

        setIsFavorite(false);
        alert(
          `Removed from favorites: ${name}, ${city}, ${userID}, ${street}, ${dentistID}`
        );
      });
    }
  };

  useEffect(() => {
    const favoriteCheck = favorite.some((fv) => fv.dentistID === item.id);
    setIsFavorite(favoriteCheck);
  }, [favorite, item]);

  return (
    <Button colorScheme={isFavorite ? "red" : "green"} onClick={handleSubmit}>
      {isFavorite ? "Remove from favorites" : "Add to favorites"}
    </Button>
  );
};

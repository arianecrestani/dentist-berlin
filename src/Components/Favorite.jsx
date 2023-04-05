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
// import { AiFillHeart } from "react-icons/ai";
// import { Icon } from "@chakra-ui/react";
// import { collection } from "firebase/firestore";
// import { db } from "../fbConfig";


export const Favorite = ({ item, favorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const city = item.tags["addr:city"];
    const userID = user.uid;
    const street = item.tags["addr:street"];
    const dentistID = item.id;

    // const likesRef = collection(db, "likes");
    // const snapshot = await getDocs(likesRef);

    // const likedFavorites = snapshot.docs.some((doc) => {
    //   const data = doc.data();
    //   return data.userID === userID && data.dentistID === dentistID;
    // });

    // const likesRef = collection(db, "favorite");
    // const likesQuery = query(
    //   likesRef,
    //   where("userID", "==", userID),
    //   where("dentistID", "==", dentistID)
    // );


    if (!isFavorite) {
      const newFavorite = {
        city: city,
        userID: userID,
        street: street,
        dentistID: dentistID,
      };

      try {
        const docRef = await addDoc(collection(db, "favorite"), newFavorite);
        alert(`Added to favorites: ${city}, ${userID}, ${street}, ${dentistID}`)

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("try again");
      }
    } else {
      const handleRemove = async (documentId) => {
        try {
          await deleteDoc(doc(db, "favorite", documentId));
          console.log("Document successfully deleted!");
        } catch (e) {
          console.error("Error removing document: ", e);
        }
      };
    }
  };
  useEffect(()=>{
    const favoriteCheck = favorite.some((fv)=> fv.dentistID == item.id);
    setIsFavorite(favoriteCheck)
  },[favorite])

  return (
    <div>
      <Button
        // leftIcon={<Icon as={AiFillHeart} />}
        onClick={handleSubmit}
      ></Button>
      Add to favorites
      {isFavorite ? (<p>isFavorite</p>):(<p>not favorite</p>)}
      
    </div>
  );
};

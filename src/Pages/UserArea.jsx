import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../fbConfig";
import { AuthContext } from "../Contexts/AuthContext";

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
      <ul>
        {favoriteShows.map((favorite) => (
          <li key={favorite.dentistID}>{favorite.city}</li>
        ))}
      </ul>
    </div>
  );
};

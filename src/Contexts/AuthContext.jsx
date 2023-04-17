import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateProfile
  
} from "firebase/auth";
import { auth } from "../fbConfig";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../fbConfig";

export const AuthContext = createContext([]);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createNewUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user)
        addDoc(collection(db, "users"), {
          userId: userCredential.user.uid,
          name: name,
        });
        updateProfile(userCredential.user, {
          displayName: name,
        }).then((result) => {
          console.log(result)
        })
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        setUser(loggedUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("use is logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      return error;
    }
  };

  const checkForCurrentUser = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    checkForCurrentUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, logIn, logOut, createNewUser, resetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

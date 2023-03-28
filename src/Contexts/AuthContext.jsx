import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../fbConfig";

export const AuthContext = createContext([]);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        console.log(newUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        setUser(loggedUser);
        alert("Log in successfull");
      })
      .catch((error)=> {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const logOut =()=> {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("use is logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkForCurrentUser =()=> {
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
    <AuthContext.Provider value={{ user, logIn, logOut, createNewUser }}>
      {children}
    </AuthContext.Provider>
  );
};

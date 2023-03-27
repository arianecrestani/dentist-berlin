import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fbConfig";

export const AuthContext = createContext();

export const Authentication = () => {
  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        console.log(user)

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)

      });
  };

  return <AuthContext.Provider value={{ createNewUser }}>
    {props.children}
  </AuthContext.Provider>;
};

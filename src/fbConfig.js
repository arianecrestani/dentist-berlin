// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2lBVftklAsfIt0YCW10dHWd3VQKj6pDk",
  authDomain: "search-dentist-c79f4.firebaseapp.com",
  projectId: "search-dentist-c79f4",
  storageBucket: "search-dentist-c79f4.appspot.com",
  messagingSenderId: "627731533299",
  appId: "1:627731533299:web:dd65574e24721e27df5686"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
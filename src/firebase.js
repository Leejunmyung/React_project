// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnJ-x3c-ICsFdeYWDxMNQ1m-3OPivtLug",
  authDomain: "react-mydict-19887.firebaseapp.com",
  projectId: "react-mydict-19887",
  storageBucket: "react-mydict-19887.appspot.com",
  messagingSenderId: "780766325954",
  appId: "1:780766325954:web:e67917d53ba7233b241f5b",
  measurementId: "G-WPEMK69X2Q"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const db = getFirestore();
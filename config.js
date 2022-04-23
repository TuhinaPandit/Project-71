import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi6qHdC_BNj4tHbVYNzqtaQspuxtmo76E",
  authDomain: "e-ride-stage-4--pro71.firebaseapp.com",
  projectId: "e-ride-stage-4--pro71",
  storageBucket: "e-ride-stage-4--pro71.appspot.com",
  messagingSenderId: "193988597899",
  appId: "1:193988597899:web:7637884dfc681f5ae19c8e"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

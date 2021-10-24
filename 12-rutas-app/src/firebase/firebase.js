// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjylD0s8Ba6tIlAsFDC10badXd-AM-74k",
  authDomain: "loginapp-f61ba.firebaseapp.com",
  projectId: "loginapp-f61ba",
  storageBucket: "loginapp-f61ba.appspot.com",
  messagingSenderId: "807915842009",
  appId: "1:807915842009:web:f2b74fdec6dae336aa11c8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
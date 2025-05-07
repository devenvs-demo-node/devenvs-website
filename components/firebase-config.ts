// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "devenvs10.firebaseapp.com",
  databaseURL: "https://devenvs10-default-rtdb.firebaseio.com",
  projectId: "devenvs10",
  storageBucket: "devenvs10.firebasestorage.app",
  messagingSenderId: "474516078078",
  appId: "1:474516078078:web:5405778f4125d3a3a414af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

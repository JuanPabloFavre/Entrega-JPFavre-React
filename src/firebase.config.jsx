// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT_jpdqWON-Fj7zVcv3kDJOj6V0OWf2W0",
  authDomain: "react-jpf.firebaseapp.com",
  projectId: "react-jpf",
  storageBucket: "react-jpf.appspot.com",
  messagingSenderId: "398079223368",
  appId: "1:398079223368:web:d2e2f92bf7270fd7be9a7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh9Y2iEKTpVs-edT10abWlYvSRFKXWALk",
  authDomain: "contact-app-430fc.firebaseapp.com",
  projectId: "contact-app-430fc",
  storageBucket: "contact-app-430fc.appspot.com",
  messagingSenderId: "397373212833",
  appId: "1:397373212833:web:27b7fac3f294cf43ef48e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
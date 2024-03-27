// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "spartevents-cd982.firebaseapp.com",
  projectId: "spartevents-cd982",
  storageBucket: "spartevents-cd982.appspot.com",
  messagingSenderId: "44744210485",
  appId: "1:44744210485:web:ba18aa64f235499f98997c",
  measurementId: "G-KSE17DPJG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

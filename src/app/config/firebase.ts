// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { ReCaptchaV3Provider, initializeAppCheck } from "firebase/app-check";
declare global {
  //eslint-disable-next-line no-var
  var FIREBASE_APPCHECK_DEBUG_TOKEN: boolean | string | undefined
}
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

if(import.meta.env.DEV){
  self.FIREBASE_APPCHECK_DEBUG_TOKEN=true
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAppCheck(app,{
  provider: new ReCaptchaV3Provider('6Lf7QagpAAAAAOrrx1cTco8WZBmVB_crvftpj2CC'),
  isTokenAutoRefreshEnabled: true
})
export const auth = getAuth(app)
export const db = getFirestore(app)

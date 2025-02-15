// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "netflixgpt-6563e.firebaseapp.com",
  projectId: "netflixgpt-6563e",
  storageBucket: "netflixgpt-6563e.firebasestorage.app",
  messagingSenderId: "111131357280",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-Y4FMDG8KMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

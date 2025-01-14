// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALARrGRdfTJQVJtelabp3FR9SVqvJwmCU",
  authDomain: "netflixgpt-6563e.firebaseapp.com",
  projectId: "netflixgpt-6563e",
  storageBucket: "netflixgpt-6563e.firebasestorage.app",
  messagingSenderId: "111131357280",
  appId: "1:111131357280:web:cb5e06f2f9f1d5acf65305",
  measurementId: "G-Y4FMDG8KMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

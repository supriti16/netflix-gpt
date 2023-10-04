// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6Hpt2I8xmHwqeKMUvFKJM7hU5XqFCotE",
  authDomain: "netflix-gpt-e4888.firebaseapp.com",
  projectId: "netflix-gpt-e4888",
  storageBucket: "netflix-gpt-e4888.appspot.com",
  messagingSenderId: "655077826025",
  appId: "1:655077826025:web:6a394957c693ae04863f78",
  measurementId: "G-Q5L5FK08CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth()

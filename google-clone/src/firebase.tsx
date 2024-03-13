// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRhYmy0p44rnVygavhEmDexCvA3kfWZnY",
  authDomain: "clone-aea5c.firebaseapp.com",
  projectId: "clone-aea5c",
  storageBucket: "clone-aea5c.appspot.com",
  messagingSenderId: "710446065353",
  appId: "1:710446065353:web:c3373411abc25553140f18",
  measurementId: "G-SKNSLTWN48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

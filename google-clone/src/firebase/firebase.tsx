import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBRhYmy0p44rnVygavhEmDexCvA3kfWZnY",
  authDomain: "clone-aea5c.firebaseapp.com",
  projectId: "clone-aea5c",
  storageBucket: "clone-aea5c.appspot.com",
  messagingSenderId: "710446065353",
  appId: "1:710446065353:web:c3373411abc25553140f18",
  measurementId: "G-SKNSLTWN48",
};

export const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

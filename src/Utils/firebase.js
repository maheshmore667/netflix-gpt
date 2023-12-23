// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0hJh_HT1-xrpYZgv3jC2D8coF2DlpESo",
  authDomain: "netflix-gpt-ae4dd.firebaseapp.com",
  projectId: "netflix-gpt-ae4dd",
  storageBucket: "netflix-gpt-ae4dd.appspot.com",
  messagingSenderId: "756206428274",
  appId: "1:756206428274:web:fa51e79c04d0bd4cbde2eb",
  measurementId: "G-HTM7SHCFHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
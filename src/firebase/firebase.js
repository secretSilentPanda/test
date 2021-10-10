import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-_nHZGUMOyMLwSwZIBKypP5lGxSFDYwk",
  authDomain: "react-android-6523e.firebaseapp.com",
  databaseURL:
    "https://react-android-6523e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-android-6523e",
  storageBucket: "react-android-6523e.appspot.com",
  messagingSenderId: "269425320012",
  appId: "1:269425320012:web:921737c61e8abd190854e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

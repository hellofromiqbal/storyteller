import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHNcIDWEmDdm0d96yc9Q0faWXKqlyycz0",
  authDomain: "storyteller-b0b39.firebaseapp.com",
  projectId: "storyteller-b0b39",
  storageBucket: "storyteller-b0b39.appspot.com",
  messagingSenderId: "54489867121",
  appId: "1:54489867121:web:34e8d173c0e325058b8cd0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
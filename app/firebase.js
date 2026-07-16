import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHb9eck67Wk_jh2CeIe2QRwTOfkC2ycow",
  authDomain: "learnora-e790a.firebaseapp.com",
  projectId: "learnora-e790a",
  storageBucket: "learnora-e790a.firebasestorage.app",
  messagingSenderId: "746898115264",
  appId: "1:746898115264:web:4e577df53d46575483fb25",
  measurementId: "G-SD4Q2ZYVGS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
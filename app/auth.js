import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase";

// Signup
export const emailSignup = async (email, password) => {
  return await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
};

// Login
export const emailLogin = async (email, password) => {
  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};
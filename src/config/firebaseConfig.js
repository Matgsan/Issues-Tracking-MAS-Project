import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9m_5-EBgPWrI8jgiPSCSJgkMN6Rp7GJk",
  authDomain: "mas-gt-first-assignment.firebaseapp.com",
  projectId: "mas-gt-first-assignment",
  storageBucket: "mas-gt-first-assignment.appspot.com",
  messagingSenderId: "1007930383223",
  appId: "1:1007930383223:web:f347fb1f7f854cd24bdf72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore();

export {app, auth, firestore}
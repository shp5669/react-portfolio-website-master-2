
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyACR4SlKU8qAFtaDuajrEoYbjyf9zNSQLk",
  authDomain: "react-portfolio-1e058.firebaseapp.com",
  projectId: "react-portfolio-1e058",
  storageBucket: "react-portfolio-1e058.appspot.com",
  messagingSenderId: "1064829910830",
  appId: "1:1064829910830:web:14deae47a795c9b0f744bf",
  measurementId: "G-YR2YGDZP37"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCOcd0R-vQVG1_zEKFpc-CWR7mobeaUl9o",
  authDomain: "bouncer-ca1eb.firebaseapp.com",
  projectId: "bouncer-ca1eb",
  storageBucket: "bouncer-ca1eb.appspot.com",
  messagingSenderId: "79038706135",
  appId: "1:79038706135:web:a0a4ed01dd21c74eaa1b92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
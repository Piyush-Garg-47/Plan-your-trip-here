// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" ; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPILtouYQg_6ZAR9wAWPgG6kQDkjUmaKc",
  authDomain: "chatapp-5a161.firebaseapp.com",
  projectId: "chatapp-5a161",
  storageBucket: "chatapp-5a161.firebasestorage.app",
  messagingSenderId: "146409956964",
  appId: "1:146409956964:web:f4265ca32a25165ae22171"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) ; 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "designgenie-20bc3.firebaseapp.com",
  databaseURL: "https://designgenie-20bc3-default-rtdb.firebaseio.com",
  projectId: "designgenie-20bc3",
  storageBucket: "designgenie-20bc3.appspot.com",
  messagingSenderId: "933185127017",
  appId: "1:933185127017:web:700281188fe3f9a17b18f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app)
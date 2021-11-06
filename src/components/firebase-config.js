// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT9y7UxBEINjIoSSUu8i3GkGRcufIN704",
  authDomain: "pay2gether-23ac1.firebaseapp.com",
  projectId: "pay2gether-23ac1",
  storageBucket: "pay2gether-23ac1.appspot.com",
  messagingSenderId: "502013830031",
  appId: "1:502013830031:web:7f362a4778bfd201d661fa",
  measurementId: "G-7D59BSKB27",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

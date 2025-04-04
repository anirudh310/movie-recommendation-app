
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR20IYUpx2Yxr88cKxiHrWzM8JVoxP53g",
  authDomain: "netflix-gpt-7a2b1.firebaseapp.com",
  projectId: "netflix-gpt-7a2b1",
  storageBucket: "netflix-gpt-7a2b1.appspot.com",
  messagingSenderId: "470231023566",
  appId: "1:470231023566:web:2e8113e7197cffe6c6b59f",
  measurementId: "G-KTL9C6P7PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
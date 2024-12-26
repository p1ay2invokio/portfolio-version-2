// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpsWrXgPqLb5VyMcQpC9Fe_twmxVn-lz4",
  authDomain: "p1ay2-portfolio.firebaseapp.com",
  projectId: "p1ay2-portfolio",
  storageBucket: "p1ay2-portfolio.firebasestorage.app",
  messagingSenderId: "594337976050",
  appId: "1:594337976050:web:589d13f7cec0cc84d00a6b",
  measurementId: "G-ENWH8GMVY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)

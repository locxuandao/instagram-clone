import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDwSr5StlZGtaxgNlXe5lebTl1WFVmkMQw",
    authDomain: "clone-instagram-8b246.firebaseapp.com",
    projectId: "clone-instagram-8b246",
    storageBucket: "clone-instagram-8b246.appspot.com",
    messagingSenderId: "939391148014",
    appId: "1:939391148014:web:a21ad76a81c94a88cab8ff",
    measurementId: "G-YMRN7MM1XJ"
  };
  
  // Initialize Firebase
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore()

  export {auth, db};
  export default firebase;

  

  
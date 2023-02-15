import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjkycaziyYxxaKIg7hA8Na_Z-JROBJTOs",
    authDomain: "reacttest2-1fab0.firebaseapp.com",
    projectId: "reacttest2-1fab0",
    storageBucket: "reacttest2-1fab0.appspot.com",
    messagingSenderId: "105284847219",
    appId: "1:105284847219:web:7646d65d350175be80cc06"
  };
  

    const app = initializeApp(firebaseConfig);

    export const db = getFirestore(app);
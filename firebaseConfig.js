import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCw73noZcxA27XkUiMu0409QAnA4c9ZAls",
    authDomain: "calendartest-68aea.firebaseapp.com",
    projectId: "calendartest-68aea",
    storageBucket: "calendartest-68aea.appspot.com",
    messagingSenderId: "1015577707199",
    appId: "1:1015577707199:web:82d0016540d0c445143c0a",
    measurementId: "G-C3Y5VHMZPY"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

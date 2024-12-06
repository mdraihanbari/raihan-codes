// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgLYOCKTqEqv2DPbdphYQdSCsmZ0w7T_E",
  authDomain: "raihan-codes.firebaseapp.com",
  projectId: "raihan-codes",
  storageBucket: "raihan-codes.firebasestorage.app",
  messagingSenderId: "100012587808",
  appId: "1:100012587808:web:838e38dbc9120693c1b545"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgqCIDW40oTPsaMq2XHvPAxxTHIaPEL8A",
  authDomain: "yugioh-personal-store.firebaseapp.com",
  projectId: "yugioh-personal-store",
  storageBucket: "yugioh-personal-store.appspot.com",
  messagingSenderId: "516945211646",
  appId: "1:516945211646:web:c38d9704e6ec7bb53175af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
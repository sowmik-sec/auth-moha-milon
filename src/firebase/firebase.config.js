// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ5Edc-3j0AB5ffwn_eN-vUJicvNHXT6s",
  authDomain: "auth-moha-milon-79e42.firebaseapp.com",
  projectId: "auth-moha-milon-79e42",
  storageBucket: "auth-moha-milon-79e42.appspot.com",
  messagingSenderId: "411216622290",
  appId: "1:411216622290:web:eff7b5400e9345e11e330b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

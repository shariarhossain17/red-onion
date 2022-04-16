
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlV9XJBRq-bWlV44eJJCJ5LNzCwq6GpJs",
  authDomain: "red-onion-7e62e.firebaseapp.com",
  projectId: "red-onion-7e62e",
  storageBucket: "red-onion-7e62e.appspot.com",
  messagingSenderId: "936282266592",
  appId: "1:936282266592:web:d0372fddca7652a529e985"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
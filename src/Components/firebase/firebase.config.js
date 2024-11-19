// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBROx7mavgrbcDO9T-jLR6aV_lYtbs5m_Y",
  authDomain: "discountpro-a09.firebaseapp.com",
  projectId: "discountpro-a09",
  storageBucket: "discountpro-a09.firebasestorage.app",
  messagingSenderId: "438778674755",
  appId: "1:438778674755:web:6335122c6d00cbc2009ef6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

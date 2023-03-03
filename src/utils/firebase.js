// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBePEYO7QbfzhLgF-9uqiopao9WAm94IQk",
    authDomain: "travel128-9bfc2.firebaseapp.com",
    projectId: "travel128-9bfc2",
    storageBucket: "travel128-9bfc2.appspot.com",
    messagingSenderId: "844791369113",
    appId: "1:844791369113:web:a33664d466c8428c755708"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { FIREBASE_API_KEY } from '../utils/credentials';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "wanted-clone-51ab9.firebaseapp.com",
    projectId: "wanted-clone-51ab9",
    storageBucket: "wanted-clone-51ab9.appspot.com",
    messagingSenderId: "1051273521766",
    appId: "1:1051273521766:web:e923b678f62aa1cae49ba7",
    measurementId: "G-4LJKD0MK87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
export const storage = getStorage(app);
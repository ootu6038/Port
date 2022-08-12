// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXiKtMdXe8Tcg-3u7-8sfNj3JzSbiYyYg",
    authDomain: "mailform-79aed.firebaseapp.com",
    projectId: "mailform-79aed",
    storageBucket: "mailform-79aed.appspot.com",
    messagingSenderId: "402829033328",
    appId: "1:402829033328:web:9eea5ff983a92d684519b5",
    measurementId: "G-Y3K3H485VP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
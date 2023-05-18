// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBv1vMJtb1agWUM2QqHA-xzfVhCfhcTMfY",
    authDomain: "rc-flight-zone.firebaseapp.com",
    projectId: "rc-flight-zone",
    storageBucket: "rc-flight-zone.appspot.com",
    messagingSenderId: "560650995717",
    appId: "1:560650995717:web:95755e86bc771be14f346c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
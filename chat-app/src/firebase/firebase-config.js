// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBCWqaHHW0L7KOyI1Ce2Y6INTqA_XAdQns",

  authDomain: "realtime-chat-e97cc.firebaseapp.com",

  projectId: "realtime-chat-e97cc",

  storageBucket: "realtime-chat-e97cc.firebasestorage.app",

  messagingSenderId: "473707291034",

  appId: "1:473707291034:web:b01960d5bde20cae94da23"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
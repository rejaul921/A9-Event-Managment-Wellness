// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDNTCa3B13exPmAMQDjbZrAF3t9uLdiME",
  authDomain: "wellness-eventharbor.firebaseapp.com",
  projectId: "wellness-eventharbor",
  storageBucket: "wellness-eventharbor.appspot.com",
  messagingSenderId: "584312837547",
  appId: "1:584312837547:web:09537dbcc9909a26f8eeee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
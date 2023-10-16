// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_IXDU0KTfbFcnx5Oy4N8xzNSWCzvjHqw",
  authDomain: "immobilliere-18a3b.firebaseapp.com",
  databaseURL: "https://immobilliere-18a3b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "immobilliere-18a3b",
  storageBucket: "immobilliere-18a3b.appspot.com",
  messagingSenderId: "831100733950",
  appId: "1:831100733950:web:f17b34ca9b4c7ba23758af",
  measurementId: "G-CJM63L4VFD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

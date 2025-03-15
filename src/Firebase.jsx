import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKCKOYHJHCsjwiIQrfPebFOaCiBRoh7xY",
  authDomain: "my-portfolio-77be9.firebaseapp.com",
  projectId: "my-portfolio-77be9",
  storageBucket: "my-portfolio-77be9.firebasestorage.app",
  messagingSenderId: "660005631580",
  appId: "1:660005631580:web:e236663411cab2ec7e9899",
  measurementId: "G-EQD4W7SLRZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
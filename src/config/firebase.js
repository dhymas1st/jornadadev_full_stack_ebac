import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC15CrDY3qhOerpGXLqtoWtyBAPUoOm8XQ",
  authDomain: "tiktok---jornada-3908e.firebaseapp.com",
  projectId: "tiktok---jornada-3908e",
  storageBucket: "tiktok---jornada-3908e.appspot.com",
  messagingSenderId: "259793310991",
  appId: "1:259793310991:web:5c143915b7f3486efe1a7a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
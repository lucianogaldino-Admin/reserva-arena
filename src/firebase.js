import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_fN9rAp9pr_MsoHPuenVs2WF617cPKQg",
  authDomain: "reserva-escolar-pcald5.firebaseapp.com",
  projectId: "reserva-escolar-pcald5",
  storageBucket: "reserva-escolar-pcald5.firebasestorage.app",
  messagingSenderId: "752088566449",
  appId: "1:752088566449:web:77626857701992e3363090",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6IsrWok1c6uAfG-rf5aW3V5CUhwvvvso",
  authDomain: "hiveup-frontend.firebaseapp.com",
  projectId: "hiveup-frontend",
  storageBucket: "hiveup-frontend.appspot.com",
  messagingSenderId: "120136506177",
  appId: "1:120136506177:web:d9cad16e23dbbc00821fc0",
  measurementId: "G-RM3LSTB2SF"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBCnqYHhVXhlwK-g4kofHdd8BybBV-WhrA",
//   authDomain: "hiveup-902ac.firebaseapp.com",
//   projectId: "hiveup-902ac",
//   storageBucket: "hiveup-902ac.appspot.com",
//   messagingSenderId: "987662572114",
//   appId: "1:987662572114:web:370f61663f974f3affdd8b",
//   measurementId: "G-DK3S5BNXMH"
// };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
// export { auth, app, firestore, storage };

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
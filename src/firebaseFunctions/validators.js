import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default async function doesEmailExists(email) {
    //   const q = query(collection(db, "users"), where("username", "==", username));
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return querySnapshot.size > 0;
  }
  
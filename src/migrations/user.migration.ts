// @ts-nocheck

import { db } from "../firebase/firebase.config";
import { SKILLS } from "../utils/const.data";
import { collection, addDoc } from "firebase/firestore";

const migrate = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "Ada",
      desc: "Lovelace",
      skills: SKILLS
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

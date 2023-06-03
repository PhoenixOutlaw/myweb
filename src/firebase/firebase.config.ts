import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYDUrxPYPe0vNkbXN2c2Joj-DQeSPyP_M",
  authDomain: "mysite-875a1.firebaseapp.com",
  projectId: "mysite-875a1",
  storageBucket: "mysite-875a1.appspot.com",
  messagingSenderId: "1065719010177",
  appId: "1:1065719010177:web:c7c68fc6a2e67557670e80",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;

import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCV0-UfDE8EITLTM5rW-D_esy9aERCmKqE",
  authDomain: "julianrodriguez-34775.firebaseapp.com",
  projectId: "julianrodriguez-34775",
  storageBucket: "julianrodriguez-34775.appspot.com",
  messagingSenderId: "1068518185162",
  appId: "1:1068518185162:web:bc078e3ad6765c5dde3c33",
  measurementId: "G-CSQXD8J4N6"
};
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app)
import {initializeApp} from "firebase/app"
import { config } from "dotenv";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

config();

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
};

initializeApp(firebaseConfig)

const auth = getAuth();
const db = getFirestore();

export { auth, db }
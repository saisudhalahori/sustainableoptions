// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8IGTabh3PSc8IcIE7OtwegrQAfDQ2TV8",
  authDomain: "sustainable-options-d985c.firebaseapp.com",
  projectId: "sustainable-options-d985c",
  storageBucket: "sustainable-options-d985c.appspot.com",
  messagingSenderId: "260707507064",
  appId: "1:260707507064:web:f081fda348aeb6bd25c68d"
};


// Initialize Firebased
 export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)
export const auth = getAuth(app)
export const analytics = getAnalytics(app);

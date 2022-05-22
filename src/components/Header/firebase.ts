// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from  'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCokYlMFINVGCCNcr7jhCHiDj5YzeyrVAM",
    authDomain: "jeraflix-e214c.firebaseapp.com",
    projectId: "jeraflix-e214c",
    storageBucket: "jeraflix-e214c.appspot.com",
    messagingSenderId: "281632328075",
    appId: "1:281632328075:web:2efa4f17ad4ef21620c78e"
  };
// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export {auth, db}

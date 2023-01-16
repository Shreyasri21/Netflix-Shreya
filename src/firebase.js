import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCI1Zag679nM25qAQfM4wjK1cZ2F8YNXMI",
  authDomain: "netflix-clone-1c2f3.firebaseapp.com",
  projectId: "netflix-clone-1c2f3",
  storageBucket: "netflix-clone-1c2f3.appspot.com",
  messagingSenderId: "363024618516",
  appId: "1:363024618516:web:fa223e26070e9c7e2a8301",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const database = getDatabase(firebaseApp);
export { auth };
export default db;

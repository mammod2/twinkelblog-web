import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1E9mM5qNSk87RfwqsxtAkIv3QWUky-4U",
  authDomain: "fireblogs-pratice.firebaseapp.com",
  projectId: "fireblogs-pratice",
  storageBucket: "fireblogs-pratice.appspot.com",
  messagingSenderId: "1019853751459",
  appId: "1:1019853751459:web:206c05eb114746e78beb16",
  measurementId: "G-WLB8QXJLPP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebase.firestore();

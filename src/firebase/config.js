import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import firebase/auth has some bug with webpack, but is fine to run

const firebaseConfig = {
  apiKey: "AIzaSyDT73YOxrfar9hCVDLvCGv6jKatc83CVQE",
  authDomain: "mymoney-bff93.firebaseapp.com",
  projectId: "mymoney-bff93",
  storageBucket: "mymoney-bff93.appspot.com",
  messagingSenderId: "105510134900",
  appId: "1:105510134900:web:79d4e8337358938fff1d21",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };

import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBbXnmrPRJqioif9NaS_vWvIJiJLs_l_H8",
  authDomain: "disney-plus-clone-14f50.firebaseapp.com",
  projectId: "disney-plus-clone-14f50",
  storageBucket: "disney-plus-clone-14f50.appspot.com",
  messagingSenderId: "1075227188180",
  appId: "1:1075227188180:web:768c3f7af7e2511129d441",
  measurementId: "G-5XGFN2VQ6M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

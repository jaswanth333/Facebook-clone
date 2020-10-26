import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBY2aAHLo80qN5P-734A7OHdUCKRlTJJNY",
  authDomain: "facebook-794db.firebaseapp.com",
  databaseURL: "https://facebook-794db.firebaseio.com",
  projectId: "facebook-794db",
  storageBucket: "facebook-794db.appspot.com",
  messagingSenderId: "302553653796",
  appId: "1:302553653796:web:73089735c5e9105c612eb1"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebaseApp.auth();
const provider=new firebase.auth.GoogleAuthProvider();


export {auth,provider};
export default db;
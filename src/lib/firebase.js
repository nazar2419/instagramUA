import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// here i want to impor the seed file

const config = {
  apiKey: "AIzaSyBZjLo6jcUPzu737W3hVEViPukfpn3nqNM",
  authDomain: "instagram-clone-63eaa.firebaseapp.com",
  projectId: "instagram-clone-63eaa",
  storageBucket: "instagram-clone-63eaa.appspot.com",
  messagingSenderId: "1070182858096",
  appId: "1:1070182858096:web:9142f8a2d95874efaea3b5"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//here is where I want to call the seed file (only ONCE!) 
// seedDatabase(firebase);

console.log('firebase', firebase);

export { firebase, FieldValue };
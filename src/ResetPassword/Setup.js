import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCIgz1LSfCY7LHDgDo3A71EfQvNLnI-nAA",
    authDomain: "agilewits-authentication.firebaseapp.com",
    projectId: "agilewits-authentication",
    storageBucket: "agilewits-authentication.appspot.com",
    messagingSenderId: "560881896775",
    appId: "1:560881896775:web:38c35275f580f3f6cd9062"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;
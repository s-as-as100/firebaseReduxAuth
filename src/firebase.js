
import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtq-BRenDTshhVlIqyI8hXYNjGSWSws2k",
    authDomain: "react-redux-auth-437ba.firebaseapp.com",
    projectId: "react-redux-auth-437ba",
    storageBucket: "react-redux-auth-437ba.appspot.com",
    messagingSenderId: "412640166241",
    appId: "1:412640166241:web:1bd3a5f06d5e24dc738520"
  };

  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.facebookAuthProvider();

  export  {auth, googleAuthProvider,facebookAuthProvider};

  
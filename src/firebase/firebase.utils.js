import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBDr0MhSidd6KngArT0J7dioZhoRiWpumU",
    authDomain: "crwn-db-17651.firebaseapp.com",
    databaseURL: "https://crwn-db-17651.firebaseio.com",
    projectId: "crwn-db-17651",
    storageBucket: "crwn-db-17651.appspot.com",
    messagingSenderId: "461555211181",
    appId: "1:461555211181:web:a797dc14bfd0d963649f24",
    measurementId: "G-BJ2Y33YV08"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
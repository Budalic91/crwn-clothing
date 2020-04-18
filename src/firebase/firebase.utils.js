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



  //Read data from doc
export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists)
  {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
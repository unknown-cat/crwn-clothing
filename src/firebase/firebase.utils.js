import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCtDbE0DwZnhR8AfbjI5m3CN-g2Xt_hyOg",
  authDomain: "crwn-db-c5648.firebaseapp.com",
  databaseURL: "https://crwn-db-c5648-default-rtdb.firebaseio.com",
  projectId: "crwn-db-c5648",
  storageBucket: "crwn-db-c5648.appspot.com",
  messagingSenderId: "44763808733",
  appId: "1:44763808733:web:c6f57c12624523f09d6c34",
  measurementId: "G-W1B02RJ7SY"
};

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${ userAuth.uid }`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message)
    }
  }

  return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
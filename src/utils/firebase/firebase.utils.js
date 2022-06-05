import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc,setDoc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCR9-dTqdK91DaGsOgZ-PeBhOESXSdNN3w",
  authDomain: "store-db-c435e.firebaseapp.com",
  projectId: "store-db-c435e",
  storageBucket: "store-db-c435e.appspot.com",
  messagingSenderId: "387451984277",
  appId: "1:387451984277:web:e3ddbcacfb6583e6b23e9c",
  measurementId: "G-M0ST86LDRG",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
//export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (auth) => {
    const userDocRef = doc(db,'users', auth.uid);

    const userSnapshot = await getDoc(userDocRef);


    if(!userSnapshot.exists()) {
      const {displayName, email} = auth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {displayName, email, createdAt});
      }
      catch(error) {
        console.log('error creating the user', error.message);
      }


    }

    return userDocRef;
}
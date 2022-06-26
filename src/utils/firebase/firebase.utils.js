import { initializeApp } from "firebase/app";
import {
  getAuth,
  //signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, 
  doc, 
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs 
} from 'firebase/firestore'


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
export const addCollectionAndDocuments = async (collectionKey,objects) => {
  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);

  objects.forEach(object => {
    const docRef = doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef,object)
  })

  await batch.commit()

  console.log('done');

}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);


  const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot) => {
     const {title,items} = docSnapshot.data();

     acc[title.toLowerCase()] = items;

     return acc;

  },{})

  return categoryMap;
}

export const createUserDocumentFromAuth = async (auth,additionalInfo={}) => {
    const userDocRef = doc(db,'users', auth.uid);

    const userSnapshot = await getDoc(userDocRef);


    if(!userSnapshot.exists()) {
      const {displayName, email} = auth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {displayName, email, createdAt,...additionalInfo});
      }
      catch(error) {
        console.log('error creating the user', error.message);
      }


    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => { 

  if(!email || !password) { 
    return;
  }
  
    return await createUserWithEmailAndPassword(auth,email, password);
  

}

export const signInUserWithEmailAndPassword = async (email, password) => {
  
    if(!email || !password) { 
      return;
    }

    return await signInWithEmailAndPassword(auth, email, password);

  }

export const signOutUser = async () => { 
    return  await signOut(auth);
}

export const onAuthStateChangedListener = async (callback) => { 
    return await onAuthStateChanged(auth,callback);
}
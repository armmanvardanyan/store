import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

const initUserValues = {
    currentUser: null,
    setCurrentUser: () => {},
}

export const UserContext = createContext(initUserValues)

export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        console.log('user provider');
       const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                 createUserDocumentFromAuth(user);
            }
            setCurrentUser(user) 
        })

        return () => unsubscribe();

    },[])

    const value = {currentUser,setCurrentUser}

    return <UserContext.Provider value={value}>
            {props.children}
    </UserContext.Provider>
}


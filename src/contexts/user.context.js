import { createContext, useState } from "react";

const initUserValues = {
    currentUser: null,
    setCurrentUser: () => {},
}

export const UserContext = createContext(initUserValues)

export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null)

    const value = {currentUser,setCurrentUser}

    return <UserContext.Provider value={value}>
            {props.children}
    </UserContext.Provider>
}


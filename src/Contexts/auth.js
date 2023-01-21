import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [userToken, setUserToken] = useState({})

    
    return (
        <AuthContext.Provider value={{userToken, setUserToken}}>

            {children}
        </AuthContext.Provider>
    )
}
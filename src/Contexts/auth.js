import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [userToken, setUserToken] = useState("")
    const [total, setTotal] = useState(0)

    
    return (
        <AuthContext.Provider value={{userToken, setUserToken, total, setTotal}}>

            {children}
        </AuthContext.Provider>
    )
}
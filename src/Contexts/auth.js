import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [userInfo, setUserInfo] = useState([])
    // const [total, setTotal] = useState(0)

    
    return (
        <AuthContext.Provider value={{userInfo, setUserInfo}}>

            {children}
        </AuthContext.Provider>
    )
}
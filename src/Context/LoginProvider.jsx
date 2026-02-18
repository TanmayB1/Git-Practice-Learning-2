import { createContext, useState } from "react";

export const LoginContext=createContext()

function LoginProvider({children}){
    const [isLoggedIn,setIsLoggedIn]=useState(false)

    return(
        <LoginContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider
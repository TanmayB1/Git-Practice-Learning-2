import { useContext } from "react"
import { Navigate,useLocation } from "react-router-dom"
import { LoginContext } from "../Context/LoginProvider"

function RequireAuth({children}){

    const {isLoggedIn}=useContext(LoginContext)
    const location=useLocation()

    if(isLoggedIn){
        return children
    }

    return (
        <Navigate to={"/login"} state={location.pathname}></Navigate>
    )
}

export default RequireAuth

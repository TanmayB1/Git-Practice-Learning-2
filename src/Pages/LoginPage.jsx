import { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { LoginContext } from "../Context/LoginProvider"

function LoginPage(){

    const {state}=useLocation()
    const previousPath=state || "/" 
    const {setIsLoggedIn}=useContext(LoginContext)
    const navigate=useNavigate()

    function handleClick(e){
        setIsLoggedIn(true)
        navigate(`${previousPath}`,{replace:true})
    }

    return(
        <div>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default LoginPage
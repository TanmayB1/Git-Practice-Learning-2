import { useContext } from "react"
import {Outlet,NavLink} from "react-router-dom"
import { LoginContext } from "../Context/LoginProvider"
import "./RootLayout.css"

function RootLayout(){

    const {isLoggedIn,setIsLoggedIn}=useContext(LoginContext)

    function handleClick(){
        setIsLoggedIn(false)
    }

    return(
        <div>
            <div className="navigation-ul">   
                <nav>
                    <ul className="menu">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/create-resume"}>Create Resume</NavLink></li>
                        {!isLoggedIn && <li><NavLink to={"/login"}>Login</NavLink></li>}
                        {isLoggedIn && <li onClick={handleClick}><a href="">Logout</a></li>}
                        <li><NavLink to={"/about"}>About</NavLink></li>
                    </ul>
                </nav>
                <div className="logo">CBA</div>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default RootLayout
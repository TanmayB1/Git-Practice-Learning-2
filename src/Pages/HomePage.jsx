import { useNavigate } from "react-router-dom"
import HomeImage from "../assests/Interview 04.webp"
import "./HomePage.css"

function HomePage(){

    const navigate=useNavigate()

    function handleClick(e){
        navigate("/create-resume")
    }

    return(
        <div className="home-page-both-section-container">
            <div className="home-page-left-section">
                <h1 className="home-page-left-section-h1">Free Online Resume <br /> Builder: Make Yours in <br /> Minutes</h1>
                <p>A resume builder is an online resume maker that provides guidance and <br /> tools to create a resume with a few clicks.</p>
                <button onClick={handleClick} className="create-resume-button">Create Resume</button>
            </div>
            <div>
            <img src={HomeImage} alt="" style={{width:"40vw"}} />
            </div>
        </div>
    )
}

export default HomePage
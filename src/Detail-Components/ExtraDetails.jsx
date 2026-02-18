import { useContext, useState } from "react"
import { ResumeDataContext } from "../Context/ResumeDataProvider"
import NextAndBackButtons from "../Components/NextAndBackButtons"
import { useNavigate } from "react-router-dom"
import "./preview-button.css"

function ExtraDetails({pageNo,setPageNo}){

    if(!(localStorage.getItem("skillsObj"))){
        localStorage.setItem("skillsObj",JSON.stringify({
            skillOne:"",
            skillTwo:"",
            skillThree:"",
            skillFour:"",
            skillFive:"",
            skillSix:""
        }))
    }

    if(!(localStorage.getItem("interestObj"))){
        localStorage.setItem("interestObj",JSON.stringify({
            interestOne:"",
            interestTwo:"",
            interestThree:"",
            interestFour:"",
            interestFive:"",
            interestSix:""
        }))
    }

    const {dispatch,resumeData}=useContext(ResumeDataContext)
    const [skillsObj,setSkillsObj]=useState(JSON.parse(localStorage.getItem("skillsObj")))
    const [interstObj,setInterestObj]=useState(JSON.parse(localStorage.getItem("interestObj")))
    const navigate=useNavigate()

    function handleSkillChange(e){
        setSkillsObj({...skillsObj,[e.target.name]:e.target.value})
        localStorage.setItem("skillsObj",JSON.stringify({...skillsObj,[e.target.name]:e.target.value}))
    }

    function handleInterestChange(e){
        setInterestObj({...interstObj,[e.target.name]:e.target.value})
        localStorage.setItem("interestObj",JSON.stringify({...interstObj,[e.target.name]:e.target.value}))
    }

    function handleChange(e){
        if(e.target.name.includes("skill")){
            handleSkillChange(e)
        }
        else{
            handleInterestChange(e)
        }
    }

    function handlePreview(e){
        dispatch({type:"add-data",payload:["extraDetails",[Object.values(skillsObj),Object.values(interstObj)]]})
        navigate("/resume-preview")
    }

    return(
        <div>
        <h2 className="details-header">Extra Details</h2>
        <form className="top-bottom-details-form">
        <h3>Skills/Languages</h3>
            <div className="top-section-details-form">
            <input type="text" className="text-entry-field" name="skillOne" value={skillsObj.skillOne} onChange={handleChange} placeholder="Skill 1" />
            <input type="text" className="text-entry-field" name="skillTwo" value={skillsObj.skillTwo} onChange={handleChange} placeholder="Skill 2" />
            <input type="text" className="text-entry-field" name="skillThree" value={skillsObj.skillThree} onChange={handleChange} placeholder="Skill 3" />
            </div>
            <div className="bottom-section-details-form">
            <input type="text" className="text-entry-field" name="skillFour" value={skillsObj.skillFour} onChange={handleChange} placeholder="Skill 4" />
            <input type="text" className="text-entry-field" name="skillFive" value={skillsObj.skillFive} onChange={handleChange} placeholder="Skill 5" />
            <input type="text" className="text-entry-field" name="skillSix" value={skillsObj.skillSix} onChange={handleChange} placeholder="Skill 6" />
            </div>
        </form>
        <form className="top-bottom-details-form">
        <h3>Interest</h3>
            <div className="top-section-details-form">
            <input type="text" className="text-entry-field" name="interestOne" value={interstObj.interestOne} placeholder="Interest 1" onChange={handleChange} />
            <input type="text" className="text-entry-field" name="interestTwo" value={interstObj.interestTwo} placeholder="Interest 2" onChange={handleChange} />
            <input type="text" className="text-entry-field" name="interestThree" value={interstObj.interestThree} placeholder="Interest 3" onChange={handleChange} />
            </div>
            <div className="bottom-section-details-form">
            <input type="text" className="text-entry-field" name="interestFour" value={interstObj.interestFour} placeholder="Interest 4" onChange={handleChange} />
            <input type="text" className="text-entry-field" name="interestFive" value={interstObj.interestFive} placeholder="Interest 5" onChange={handleChange} />
            <input type="text" className="text-entry-field" name="interestSix" value={interstObj.interestSix} placeholder="Interest 6" onChange={handleChange} />
            </div>
        </form>
        <NextAndBackButtons pageNo={pageNo} setPageNo={setPageNo}></NextAndBackButtons>
        <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
            <button onClick={handlePreview} className="button-30">Preview</button>
        </div>
        </div>
    )
}

export default ExtraDetails
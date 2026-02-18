import { useContext, useState } from "react"
import { ResumeDataContext } from "../Context/ResumeDataProvider"
import NextAndBackButtons from "../Components/NextAndBackButtons"

function ExperienceDetails({pageNo,setPageNo}){

    const initialState={
        companyName:"",
        jobPosition:"",
        jobDuration:"",
        jobDescription:""
    }

    if(!(localStorage.getItem("experienceDetailsObj"))){
        localStorage.setItem("experienceDetailsObj",JSON.stringify(initialState))
    }

    const {dispatch}=useContext(ResumeDataContext)
    const [experienceDetailsObj,setExperienceDetailsObj]=useState(JSON.parse(localStorage.getItem("experienceDetailsObj")))

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:"add-multiple-data",payload:["experienceDetails",{...experienceDetailsObj,id:crypto.randomUUID()}]})
        setExperienceDetailsObj(initialState)
        localStorage.setItem("experienceDetailsObj",JSON.stringify(initialState))
    }

    function handleChange(e){
        setExperienceDetailsObj({...experienceDetailsObj,[e.target.name]:e.target.value})
        localStorage.setItem("experienceDetailsObj",JSON.stringify({...experienceDetailsObj,[e.target.name]:e.target.value}))
    }

    return(
        <div>
            <h2 className="details-header">Experience Details</h2>
            <form className="top-bottom-details-form" onSubmit={handleSubmit}>
                <div className="top-section-details-form">
                <input type="text" className="text-entry-field" style={{width:"15vw"}} value={experienceDetailsObj.companyName} onChange={handleChange} placeholder="Institute/Organization *" name="companyName" />
                <input type="text" className="text-entry-field" style={{width:"15vw"}} value={experienceDetailsObj.jobPosition} onChange={handleChange} placeholder="Position *" name="jobPosition" />
                <input type="text" className="text-entry-field" style={{width:"15vw"}} value={experienceDetailsObj.jobDuration} onChange={handleChange} placeholder="Duration *" name="jobDuration" />
                </div>
                <input type="text" className="text-entry-field" value={experienceDetailsObj.jobDescription} onChange={handleChange} placeholder="Description *" name="jobDescription" style={{width:"49vw"}} />
                <button className="add-button">Add To Resume</button>
            </form>
            <NextAndBackButtons pageNo={pageNo} setPageNo={setPageNo}></NextAndBackButtons>
        </div>
    )
}

export default ExperienceDetails
import { useContext, useState } from "react"
import { ResumeDataContext } from "../Context/ResumeDataProvider"
import NextAndBackButtons from "../Components/NextAndBackButtons"

function EducationalDetails({pageNo,setPageNo}){

    const initialState={
        universityName:"",
        joiningYear:"",
        completionYear:"",
        qualification:"",
        desc:""
    }
    
    if(!(localStorage.getItem("educationalDetailsObj"))){
        localStorage.setItem("educationalDetailsObj",JSON.stringify(initialState))
    }

    const {dispatch}=useContext(ResumeDataContext)
    const[educationalDetailsObj,setEducationalDetailsObj]=useState(JSON.parse(localStorage.getItem("educationalDetailsObj")))

    function handleChange(e){
        setEducationalDetailsObj({...educationalDetailsObj,[e.target.name]:e.target.value})
        localStorage.setItem("educationalDetailsObj",JSON.stringify({...educationalDetailsObj,[e.target.name]:e.target.value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!(window.confirm("Are you sure to add this data in your resume"))){
            return
        }
        dispatch({type:"add-multiple-data",payload:["educationalDetails",{...educationalDetailsObj,id:crypto.randomUUID()}]})
        setEducationalDetailsObj(initialState)
        localStorage.setItem("educationalDetailsObj",JSON.stringify(initialState))     
    }

    return(
        <div>
            <h2 className="details-header">Educational Details</h2>
            <form className="top-bottom-details-form" method="post" onSubmit={handleSubmit}>
                <div className="top-section-details-form">
                <input type="text" className="text-entry-field" name="universityName" style={{width:"15vw"}} value={educationalDetailsObj.universityName} onChange={handleChange} placeholder="College/School Name" />
                <input type="date" className="text-entry-field" name="joiningYear" style={{width:"15vw"}} value={educationalDetailsObj.joiningYear} onChange={handleChange} />
                <input type="date" name="completionYear" className="text-entry-field" style={{width:"15vw"}} value={educationalDetailsObj.completionYear} onChange={handleChange} />
                </div>
                <div className="bottom-section-details-form">
                <input type="text" name="qualification" className="text-entry-field" style={{width:"15vw"}} value={educationalDetailsObj.qualification} placeholder="Qualification" onChange={handleChange} />
                <input type="text" name="desc" style={{width:"32vw"}} className="text-entry-field" value={educationalDetailsObj.desc} placeholder="Description" onChange={handleChange} />
                </div>
                <button className="add-button">Add To Resume</button>
            </form>
            <NextAndBackButtons pageNo={pageNo} setPageNo={setPageNo}></NextAndBackButtons>
        </div>
    )
}

export default EducationalDetails
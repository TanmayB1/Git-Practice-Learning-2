import { useState } from "react"
import NextAndBackButtons from "../Components/NextAndBackButtons"

function PersonalDetails({pageNo,setPageNo}){

        if(!(localStorage.getItem("personalDetailsObj"))){
            localStorage.setItem("personalDetailsObj",JSON.stringify({
                firstName:"",
                lastName:"",
                email:"",
                phoneNumber:"",
                userLinkedIn:"",
                userGithub:"",
                userWebsite:"",
                userFaceBook:""
            }))
        }
      
    const [personalDetailsObj,setPersonalDetailsObj]=useState(JSON.parse(localStorage.getItem("personalDetailsObj")))

    function handleChange(e){
        setPersonalDetailsObj({...personalDetailsObj,[e.target.name]:e.target.value})
        localStorage.setItem("personalDetailsObj",JSON.stringify({...personalDetailsObj,[e.target.name]:e.target.value}))
    }

    return(
        <div>
            <h2 className="details-header">Personal Details</h2>
            <form className="personal-details-form">
                <div className="left-section-details-form">
                <input type="text" className="text-entry-field" onChange={handleChange} value={personalDetailsObj.firstName} placeholder="FirstName *" name="firstName" />
                <input type="text" className="text-entry-field" onChange={handleChange} value={personalDetailsObj.lastName} placeholder="LastName *" name="lastName" />
                <input type="email" className="text-entry-field" onChange={handleChange} value={personalDetailsObj.email} placeholder="Email *" name="email" />
                <input type="tel" className="text-entry-field" onChange={handleChange} value={personalDetailsObj.phoneNumber} placeholder="Phone Number" name="phoneNumber" />
                </div>
                <div className="right-section-details-form">
                <input type="text" className="text-entry-field" onChange={handleChange} value={personalDetailsObj.userLinkedIn} placeholder="LinkedIn" name="userLinkedIn" />
                <input type="text" className="text-entry-field" onChange={handleChange} value={personalDetailsObj.userGithub} placeholder="Github" name="userGithub" />
                <input type="text" className="text-entry-field" onChange={handleChange} value={personalDetailsObj.userWebsite} placeholder="Your Website" name="userWebsite" />
                <input type="text" className="text-entry-field" onChange={handleChange} value={personalDetailsObj.userFaceBook} placeholder="FaceBook" name="userFaceBook" />
                </div>
            </form>
            <NextAndBackButtons pageNo={pageNo} setPageNo={setPageNo} actionObj={{type:"add-data",payload:["personalDetails",personalDetailsObj]}}></NextAndBackButtons>
        </div>
    )
}

export default PersonalDetails
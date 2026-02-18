import { useState } from "react"
import {EducationalDetails,PersonalDetails,ProjectDetails,ExperienceDetails, ExtraDetails} from "../Detail-Components"
import "../Detail-Components/details-form.css"

function CreateResumePage(){
    const [pageNo,setPageNo]=useState(1)
    function generateDetailComponent(){
        switch(pageNo){
            case 1:
                return <PersonalDetails pageNo={pageNo} setPageNo={setPageNo}></PersonalDetails>
            case 2:
                return <EducationalDetails pageNo={pageNo} setPageNo={setPageNo}></EducationalDetails>
            case 3:
                return <ProjectDetails pageNo={pageNo} setPageNo={setPageNo}></ProjectDetails>
            case 4:
                return <ExperienceDetails pageNo={pageNo} setPageNo={setPageNo}></ExperienceDetails>
            case 5:
                return <ExtraDetails pageNo={pageNo} setPageNo={setPageNo}></ExtraDetails>
        }
    }
    return(
        <div>
            {generateDetailComponent()}
            <p style={{textAlign:"center",marginTop:"20px"}}>Page No. {pageNo}</p>
        </div>
    )
}

export default CreateResumePage
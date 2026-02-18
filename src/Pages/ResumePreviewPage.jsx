import { useContext, useRef } from "react"
import { ResumeDataContext } from "../Context/ResumeDataProvider"
import { Educational,Experience,Personal,Project,ExtraDetailsShowcase,Links} from "../ResumePreview-Components"
import jsPDF from "jspdf"

function ResumePreviewPage(){
    
    const {resumeData}=useContext(ResumeDataContext)
    const resumeTemplateRef=useRef()
    
    const handleGeneratePdf = () => {
		window.print()
	}

    return(
        <div>
        <div ref={resumeTemplateRef}>
            <Personal {...resumeData['personalDetails']}></Personal>
            <hr />
            <div style={{display:"flex",justifyContent:"center",gap:"100px",marginTop:"20px"}}>
            <div style={{display:"flex",flexDirection:"column",gap:"30px"}}>   
            <Educational educationalData={resumeData['educationalDetails']}></Educational>
            <Links {...resumeData['personalDetails']}></Links>
            <ExtraDetailsShowcase skillsData={resumeData['extraDetails'][0]} interestData={resumeData['extraDetails'][1]}></ExtraDetailsShowcase>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"30px"}}>
            <Project projectData={resumeData['projectDetails']}></Project>
            <Experience experienceData={resumeData['experienceDetails']}></Experience>
            </div>
            </div>
        </div>
           <button className="download-button" onClick={handleGeneratePdf}>Download</button>        
        </div>
    )
}

export default ResumePreviewPage
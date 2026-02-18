import { useContext, useState } from "react"
import { ResumeDataContext } from "../Context/ResumeDataProvider"
import NextAndBackButtons from "../Components/NextAndBackButtons"

function ProjectDetails({pageNo,setPageNo}){

    const initialState={
        title:"",
        link:"",
        desc:""
    }

    if(!(localStorage.getItem("projectDetailsObj"))){
        localStorage.setItem("projectDetailsObj",JSON.stringify(initialState))
    }


    const [projectDetailsObj,setProjectDetailsObj]=useState(JSON.parse(localStorage.getItem("projectDetailsObj")))
    const {dispatch}=useContext(ResumeDataContext)

    function handleChange(e){
        setProjectDetailsObj({...projectDetailsObj,[e.target.name]:e.target.value})
        localStorage.setItem("projectDetailsObj",JSON.stringify({...projectDetailsObj,[e.target.name]:e.target.value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!(window.confirm("Are you sure to add this data in your resume"))){
            return 
        }
        dispatch({type:"add-multiple-data",payload:["projectDetails",{...projectDetailsObj,id:crypto.randomUUID()}]})
        setProjectDetailsObj(initialState)
        localStorage.setItem("projectDetailsObj",JSON.stringify(initialState))
    }

    return(
        <div>
            <h2 className="details-header">Projects Developed</h2>
            <form className="top-bottom-details-form" method="post" onSubmit={handleSubmit}>
                <input type="text" className="text-entry-field" placeholder="Title *" name="title" value={projectDetailsObj.title} onChange={handleChange} style={{width:"40vw"}} />
                <input type="text" className="text-entry-field" placeholder="Link *" name="link" value={projectDetailsObj.link} onChange={handleChange} style={{width:"40vw"}} />
                <input type="text" className="text-entry-field" placeholder="Description *" name="desc" value={projectDetailsObj.desc} onChange={handleChange} style={{width:"40vw"}} />
                <button className="add-button">Add To Resume</button>
            </form>
            <NextAndBackButtons pageNo={pageNo} setPageNo={setPageNo}></NextAndBackButtons>
        </div>
    )
}

export default ProjectDetails
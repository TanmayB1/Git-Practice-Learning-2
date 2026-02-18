import { useContext } from "react"
import { ResumeDataContext } from "../Context/ResumeDataProvider"
import "./NextAndBackButtons.css"

function NextAndBackButtons({pageNo,setPageNo,actionObj}){
    const {dispatch} = useContext(ResumeDataContext)
    return(
        <div className="back-next-button-container">
            <button className="back-next-button" disabled={pageNo===1} onClick={e=>setPageNo(pageNo-1)}>Back</button>
            <button className="back-next-button" disabled={pageNo===5} onClick={e=>{
                setPageNo(pageNo+1)
                if(actionObj){
                    dispatch(actionObj)
                }
            }}>Next</button>
        </div>
    )
}

export default NextAndBackButtons
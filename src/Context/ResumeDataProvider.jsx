import { createContext, useReducer } from "react"

export const ResumeDataContext=createContext()

function ResumeDataProvider({children}){

    function resumeReducer(prevState,actionObj){
        const toChangePropertyValue=actionObj.payload[0]
        switch(actionObj.type){

            case "add-data": 
                return {...prevState,[toChangePropertyValue]:actionObj.payload[1]}
            
            case "add-multiple-data":
                return {...prevState,[toChangePropertyValue]:[...prevState[toChangePropertyValue],actionObj.payload[1]]}    
        }
    }

    const [resumeData,dispatch]=useReducer(resumeReducer,{personalDetails:{},educationalDetails:[],projectDetails:[],experienceDetails:[],extraDetails:[]})

    return(
        <ResumeDataContext.Provider value={{resumeData,dispatch}}>
            {children}
        </ResumeDataContext.Provider> 
    )
}

export default ResumeDataProvider
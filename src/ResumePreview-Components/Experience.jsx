function Experience({experienceData}){
    return(
        <div>
            <h1 style={{fontFamily:"cursive"}}>{experienceData[0] && "EXPERIENCE"}</h1>
            {experienceData.map(individualExp=><div style={{marginTop:"15px"}} key={individualExp.id}>
                <h3>{individualExp.companyName} | {individualExp.jobPosition}</h3>
                <h4>Worked For : {individualExp.jobDuration}</h4>
                <p style={{width:"35vw",fontSize:"14px"}}>{individualExp.jobDescription}</p>
            </div>)}
        </div>
    )
}

export default Experience
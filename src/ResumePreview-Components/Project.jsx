function Project({projectData}){
    return(
        <div>
            <h1 style={{fontFamily:"cursive"}}>{projectData[0] && "PROJECTS"}</h1>
            {projectData.map(individualProjectData=><div style={{marginTop:"15px"}} key={individualProjectData.id}>
                <h3>{individualProjectData.title} | {individualProjectData.link}</h3>
                <p style={{fontSize:"14px",width:"35vw"}}>{individualProjectData.desc}</p>
            </div>)}
        </div>
    )
}

export default Project
function Educational({educationalData}){
    return(
        <div>
            <h1 style={{fontFamily:"cursive"}}>{educationalData[0] && "EDUCATION"}</h1>
            {educationalData.map(individualEduData=><div style={{marginTop:"15px"}} key={individualEduData.id}>
                <h3>{individualEduData.universityName}</h3>
                <h4>{individualEduData.qualification}</h4>
                <h5>{individualEduData.joiningYear} | {individualEduData.completionYear}</h5>
                <p style={{fontSize:"14px",width:"35vw"}}>{individualEduData.desc}</p>
            </div>)}
        </div>
    )
}

export default Educational
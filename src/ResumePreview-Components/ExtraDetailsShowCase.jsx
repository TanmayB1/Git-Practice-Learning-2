function ExtraDetailsShowcase({skillsData,interestData}){
    return(
        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <h2 style={{fontFamily:"cursive"}}>Skills</h2>
            <ul style={{display:"grid",gridTemplateColumns:"150px 150px",marginBottom:"15px"}}>
                {skillsData.map(skill=>skill ? <li>{skill}</li> : null)}
            </ul>
            <h2 style={{fontFamily:"cursive"}}>Interest</h2>
            <ul style={{display:"grid",gridTemplateColumns:"150px 150px"}}>
                {interestData.map(individualInterest=>individualInterest ? <li>{individualInterest}</li> : null)}
            </ul>
        </div>
    )
}

export default ExtraDetailsShowcase
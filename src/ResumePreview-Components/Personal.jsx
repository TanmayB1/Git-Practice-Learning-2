function Personal({firstName,lastName,email,phoneNumber,userGithub,userLinkedIn,userWebsite,userFaceBook}){
    return(
        <div style={{margin:"10px"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
            <h2 style={{fontSize:"28px",fontFamily:"cursive"}}>{firstName}&nbsp;</h2>
            <h2 style={{fontSize:"28px",fontFamily:"cursive"}}>{lastName}</h2>
            </div>
            <p style={{textAlign:"center",fontSize:"14px"}}>{userWebsite}</p>
            <div style={{display:"flex",justifyContent:"center"}}>
            <p>{email} |</p>
            <p>&nbsp;{phoneNumber}</p>
            </div>
        </div>
    )
}

export default Personal
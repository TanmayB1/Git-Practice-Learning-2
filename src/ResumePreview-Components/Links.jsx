function Links({userGithub,userLinkedIn,userFaceBook}){
    return (
        <div>
        <h2 style={{fontFamily:"cursive",marginBottom:"10px"}}>Links</h2>
        <ul>
            <li>{userGithub && `Github:// ${userGithub}`}</li>
            <li>{userLinkedIn && `LinkedIn:// ${userLinkedIn}`}</li>
            <li>{userGithub && `Facebook:// ${userFaceBook}`}</li>
        </ul>
        </div>
    )
}

export default Links
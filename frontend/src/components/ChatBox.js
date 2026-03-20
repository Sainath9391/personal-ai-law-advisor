import React from "react";

const ChatBox = () => {

return(

<div style={styles.chat}>

<h3>Conversation</h3>

<p>User: What is cyber crime law?</p>

<p>AI: Cybercrime laws deal with...</p>

</div>

)

}

const styles={
chat:{
marginTop:"30px",
border:"1px solid #ccc",
padding:"20px",
height:"200px"
}
}

export default ChatBox;
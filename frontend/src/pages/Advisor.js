import React, { useState } from "react";
import axios from "axios";

function Advisor(){

const [question,setQuestion] = useState("")
const [messages,setMessages] = useState([])
const [loading,setLoading] = useState(false)

const user = JSON.parse(localStorage.getItem("user"))

const sendQuestion = async()=>{

if(!question) return

const userMessage = {
type:"user",
text:question
}

setMessages(prev => [...prev,userMessage])

const currentQuestion = question
setQuestion("")

setLoading(true)

/* show thinking */

setMessages(prev => [
...prev,
{type:"ai",text:"Thinking..."}
])

try{

const res = await axios.post(
"https://personal-ai-law-advisor-backend.onrender.com/api/chat/ask",
{
question:currentQuestion,
userId:user?.id
}
)

/* replace thinking with AI answer */

setMessages(prev => {

const updated = [...prev]

updated[updated.length-1] = {
type:"ai",
text:res.data.answer
}

return updated

})

}
catch(err){

console.log(err)

}

setLoading(false)

}

return(

<div className="advisor-page">

<h1 className="advisor-title">
⚖️ AI Legal Advisor
</h1>

{/* VIDEO */}

<div className="advisor-video">

<video controls className="advisor-video-player">

<source src="/legal-ai-video.mp4" type="video/mp4"/>

</video>

</div>

{/* CHAT */}

<div className="chat-card">

<div className="chat-window">

{messages.map((msg,i)=>(
  <div key={i} className={`message ${msg.type}`}>
    
    {msg.type === "ai" ? (
      <div dangerouslySetInnerHTML={{ __html: msg.text }} />
    ) : (
      <span>{msg.text}</span>
    )}

  </div>
))}

</div>

<div className="input-area">

<input
type="text"
placeholder="Ask your legal question..."
value={question}
onChange={(e)=>setQuestion(e.target.value)}
onKeyDown={(e)=>{
if(e.key==="Enter"){
sendQuestion()
}
}}
/>

<button onClick={sendQuestion} disabled={loading}>
Ask AI
</button>

</div>

</div>

</div>

)

}

export default Advisor
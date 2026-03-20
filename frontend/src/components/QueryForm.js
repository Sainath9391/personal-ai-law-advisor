import React,{useState} from "react";
import axios from "axios";

function QueryForm(){

const [question,setQuestion]=useState("")
const [messages,setMessages]=useState([])

const askAI=async()=>{

if(!question) return

const userMsg={type:"user",text:question}
setMessages(prev=>[...prev,userMsg])

const res=await axios.post(
"https://personal-ai-law-advisor-backend.onrender.com/api/legal-advice",
{question}
)

const aiMsg={type:"ai",text:res.data.answer}
setMessages(prev=>[...prev,aiMsg])

setQuestion("")

}

return(

<div>

<div className="chat-window">

{messages.map((msg,i)=>(

<div key={i} className={`message ${msg.type}`}>
<span>{msg.text}</span>
</div>

))}

</div>

<div className="input-area">

<input
type="text"
placeholder="Type your legal question..."
value={question}
onChange={(e)=>setQuestion(e.target.value)}
/>

<button onClick={askAI}>
Ask
</button>

</div>

</div>

)

}

export default QueryForm
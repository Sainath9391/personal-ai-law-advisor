import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){

const navigate = useNavigate()

const [showPassword,setShowPassword] = useState(false)

const [formData,setFormData] = useState({
email:"",
password:""
})

const handleChange=(e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
})
}

const handleSubmit = async(e)=>{

e.preventDefault()

try{

const res = await axios.post(
"http://localhost:5000/api/auth/login",
formData
)

localStorage.setItem("token",res.data.token)
localStorage.setItem("user",JSON.stringify(res.data.user))

alert("Login successful")

navigate("/")

}
catch(err){

alert(err.response?.data?.msg || "Login failed")

}

}

return(

<div className="auth-wrapper">

<div className="auth-box">

<h1 className="auth-logo">⚖️ AI Legal Advisor</h1>

<h2>Client Login</h2>

<form onSubmit={handleSubmit}>

<div className="input-group">

<label>Email Address</label>

<input
type="email"
name="email"
placeholder="Enter your email"
onChange={handleChange}
required
/>

</div>

<div className="input-group">

<label>Password</label>

<div className="password-box">

<input
type={showPassword ? "text":"password"}
name="password"
placeholder="Enter password"
onChange={handleChange}
required
/>

<span
className="toggle-pass"
onClick={()=>setShowPassword(!showPassword)}
>
{showPassword ? "Hide":"Show"}
</span>

</div>

</div>

<button className="auth-btn">
Login
</button>

<p className="auth-switch">
Don't have an account?
<Link to="/signup"> Sign Up</Link>
</p>

</form>

</div>

</div>

)

}

export default Login
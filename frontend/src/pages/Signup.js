import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup(){

const navigate = useNavigate()

const [formData,setFormData] = useState({
name:"",
email:"",
password:"",
confirmPassword:""
})

const handleChange = (e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
})
}

const handleSubmit = async(e)=>{
e.preventDefault()

if(formData.password !== formData.confirmPassword){
alert("Passwords do not match")
return
}

try{

const res = await axios.post(
"https://personal-ai-law-advisor-backend.onrender.com/api/auth/signup",
{
name:formData.name,
email:formData.email,
password:formData.password
}
)

alert("Signup successful")

navigate("/login")

}
catch(err){

alert(err.response?.data?.msg || "Signup failed")

}

}

return(

<div className="auth-wrapper">

<div className="auth-box">

<h1 className="auth-logo">⚖️ AI Legal Advisor</h1>

<h2>Create Account</h2>

<form onSubmit={handleSubmit}>

<div className="input-group">

<label>Full Name</label>

<input
type="text"
name="name"
placeholder="Enter your full name"
onChange={handleChange}
required
/>

</div>

<div className="input-group">

<label>Email Address</label>

<input
type="email"
name="email"
placeholder="Enter email"
onChange={handleChange}
required
/>

</div>

<div className="input-group">

<label>Password</label>

<input
type="password"
name="password"
placeholder="Create password"
onChange={handleChange}
required
/>

</div>

<div className="input-group">

<label>Confirm Password</label>

<input
type="password"
name="confirmPassword"
placeholder="Confirm password"
onChange={handleChange}
required
/>

</div>

<button className="auth-btn">
Create Account
</button>

<p className="auth-switch">
Already have an account?
<Link to="/login"> Login</Link>
</p>

</form>

</div>

</div>

)

}

export default Signup
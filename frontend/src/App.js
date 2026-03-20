import { BrowserRouter,Routes,Route } from "react-router-dom"

import Home from "./pages/Home"
import Advisor from "./pages/Advisor"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Navbar from "./components/Navbar"
import Features from "./pages/Features"
import DocumentAnalyzer from "./pages/DocumentAnalyzer";
import History from "./pages/History";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/advisor" element={<Advisor/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/features" element={<Features/>}/>
<Route path="/analyze" element={<DocumentAnalyzer />} />
<Route path="/history" element={<History />} />
</Routes>

</BrowserRouter>

)

}

export default App
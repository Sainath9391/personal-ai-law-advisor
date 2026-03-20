import React from "react";
import legalImage from "../assets/legal-advisor.png";

function PlatformOverview(){

return(

<section className="platform">

<div className="platform-image">

<img src={legalImage} alt="AI Legal Advisor"/>

</div>

<div className="platform-content">

<h2>Smart AI Legal Assistance</h2>

<p>
Our AI Legal Advisor provides intelligent legal insights
to help individuals understand laws, contracts,
compliance rules and legal procedures easily.
</p>

<ul>

<li>⚖️ AI Powered Legal Research</li>
<li>📄 Legal Document Understanding</li>
<li>🛡 Compliance Guidance</li>
<li>🤖 Intelligent Legal Advisor</li>

</ul>

</div>

</section>

)

}

export default PlatformOverview
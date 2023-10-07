import "./techStack.css"

import React from 'react'

const TechStack = () => {
    const data=[
{name:"Full Stack Developer"},
{name:"Javascript"},
{name:"CSS"},
{name:"HTML"},
{name:"React"},
{name:"Redux"},
{name:"Express"},
{name:"Authentication"},
{name:"Error Handling"},
{name:"RESTful APIs"},
{name:"Context Api"},
{name:"Bootstrap"},
{name:"Version Control (Git)"},
{name:"Typescript"},
{name:"Node.js"},
{name:"MongoDB"},
{name:"CSS Preprocessors(Sass)"},
{name:"Responsive Designs"},
{name:"Documentation"}


    ]
  return (
    <div className="container techStack-section">
    <div className="section-title">

<h2>Tech Stack</h2>

    </div>
    <div className="row">
{data.map((item, index)=>(
<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
    <div className="tech-content">

    <p>{item.name}</p>

    </div>

</div>
))}

    </div>
    </div>
  )
}

export default TechStack

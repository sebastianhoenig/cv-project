import React, { useContext } from 'react';
import { CvContext } from '../context/CvContext';
import OutputProjectItem from './OutputProjectItem';
import '../components-css/OutputProject.css'

function OutputProjects() {
  // nicht das deleten, sondern die <ExperienceItem />
  const cv = useContext(CvContext)[0];

  const project = [
    {
      name: "CV-Creator",
      startDate: "03/2022",
      endDate: "05/2022",
      link: "www.github.com/sebastianhoenig",
      summary: [
        "Created a program to style and format a CV template and used it to write this CV.", 
        "Used Technologies: HTML, CSS, ReactJS."
      ]
      }
  ]
  return (
    <div className="outputProjectStart"> 
      <div className="projectHeadline">
        <h4>Projects</h4>
        <hr />
      </div>
      <div className="outputProject">
        {project.map((element, idx) => {
          return <OutputProjectItem key={idx} content={element}/>
        })}
      </div>
    </div>
  )
}

export default OutputProjects

/**
 *  {content.name} <br />
      {content.link} <br />
      {content.startDate} <br />
      {content.endDate} <br />
      {content.summary} <br />
 */
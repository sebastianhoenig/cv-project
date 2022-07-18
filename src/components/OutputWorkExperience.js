import React, { useContext } from 'react';
import { CvContext } from '../context/CvContext';
import OutputWorkExperienceItem from './OutputWorkExperienceItem';
import '../components-css/OutputWorkExperience.css'

function OutputWorkExperience() {
  const cv = useContext(CvContext)[0];

  const workExperience = [
    {
      companyName: "Apple Computer",
      position: "Software Engineer, Intern",
      startDate: "06/2020",
      endDate: "08/2020",
      summary: [
        "Reduced time to render the user's buddy list by 75% by implementing prediction algorithm.",
        "Implemented iChat integration with OS X Spotlight Search by creating tool which extracts metadata from saved chat transcripts and provides metadata to a system-wide search database.",
        "Redesigned chat file format and implemented backwards compatibility for search."
      ]
    },
    {
      companyName: "Microsoft Corporation",
      position: "Lead Student Ambassador",
      startDate: "06/2018",
      endDate: "05/2019",
      summary: [
        "Promoted to Lead Student Ambassador in Fall, supervised 10-15 Student Ambassadors.",
        "Created and taught Computer Science course, CSE 099: Software Design and Development"
      ]
    },
    {
      companyName: "University of Pennsylvania",
      position: "Head Teaching Assistant",
      startDate: "06/2015",
      endDate: "05/2018",
      summary: [
        "Courses: Advanced Java III, Software Engineering, Mathematical Foundations of Comp. Sci. I & II",
        "Promorted to Head TA in Fall 2017; led weekly meetings and supervised four other TAs"
      ]
    },
    {
      companyName: "Microsoft Corporation",
      position: "Software Design Engineer, Intern",
      startDate: "06/2015",
      endDate: "03/2015",
      summary: [
        "Implemented a user interface for the VS open file switcher and extended it to tool windows.",
        "Created service to provide gradient across VS and VS add-ins. Optimized service via caching."
      ]
    },
  ]
  return (
    <div className="outputExperienceStart">
      <div className="experienceHeadline">
        <h4>Experience</h4>
        <hr />
      </div>
      <div className="outputWorkExperience"> 
        {cv.workExperience.map((element, idx) => {
          return <OutputWorkExperienceItem key={idx} content={element}/>
        })}
      </div>
    </div>
  )
}


/**
 * {content.companyName} <br />
      {content.position} <br />
      {content.startDate} <br />
      {content.endDate} <br />
      {content.summary} <br />
 */
export default OutputWorkExperience
import React, { useContext } from 'react';
import { CvContext } from '../context/CvContext';
import OutputEducationItem from './OutputEducationItem';
import '../components-css/OutputEducation.css'

function OutputEducation() {
  // nicht das deleten, sondern die <ExperienceItem />
  const cv = useContext(CvContext)[0];

  const education = [
    {
      institution: "University of Pennsylvania",
      degree: "B. Sc. Computer Science",
      startDate: "09/2015",
      endDate: "07/2020",
      grade: "4.0 GPA",
      summary: [
        "Bachelor Thesis: Unsupervised Multiple Person Tracking using AutoEncoder-based lifted Multicuts",
        "Relevant Coursework: Algorithms & Data strctures 1 & 2, Machine Learning 1 & 2, Object Oriented Programming 1 & 2"
      ]
    }
  ]
  return (
    <div className="outputEducationStart"> 
      <div className="educationHeadline">
        <h4>Education</h4>
        <hr />
      </div>
      <div className="outputEducation">
        {education.map((element, idx) => {
          return <OutputEducationItem key={idx} content={element}/>
        })}
      </div>
    </div>
  )
}

export default OutputEducation

/**
 *    {content.institution} <br />
      {content.degree} <br />
      {content.startDate} <br />
      {content.endDate} <br />
      {content.grade} <br />
      {content.summary} <br />
 */
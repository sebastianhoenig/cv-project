import React, { useState, useContext } from 'react';
import { CvContext } from '../context/CvContext';
import OutputWorkExperienceItem from './OutputWorkExperienceItem';

function OutputWorkExperience() {

  const [cv, setCv] = useContext(CvContext);
  return (
    <div>
      {cv.workExperience.map((element, idx) => {
        return <OutputWorkExperienceItem content={element} key={idx}/>
      })}
    </div>
  )
}

export default OutputWorkExperience
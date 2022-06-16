import React, { useState, useContext } from 'react';
import { CvContext } from '../context/CvContext';
import OutputWorkExperienceItem from './OutputWorkExperienceItem';

function OutputWorkExperience() {

  const [cv, setCv] = useContext(CvContext);
  return (
    <div>
      {cv.workExperience.map((element) => {
        return <OutputWorkExperienceItem content={element}/>
      })}
    </div>
  )
}

export default OutputWorkExperience
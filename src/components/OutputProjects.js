import React, { useContext } from 'react';
import { CvContext } from '../context/CvContext';
import OutputProjectItem from './OutputProjectItem';

function OutputProjects() {
  // nicht das deleten, sondern die <ExperienceItem />
  const cv = useContext(CvContext)[0];
  return (
    <div> 
      {cv.project.map((element, idx) => {
        return <OutputProjectItem key={idx} content={element}/>
      })}
    </div>
  )
}

export default OutputProjects
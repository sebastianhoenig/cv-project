import React, { useState, useContext, useEffect } from 'react'
import ExperienceItem from './InputWorkExperienceComponents/ExperienceItem';
import { CvContext } from '../context/CvContext';

function InputWorkExperience() {

  const [cv, setCv] = useContext(CvContext);

  const [workExperience, setWorkExperience] = useState([
    {
      companyName: '',
      position: '',
      startDate: '',
      endDate: '',
      summary: '',
      id: 0
    },
  ]);

  const [experienceItems, setExperienceItems] = useState(
    [<ExperienceItem id={0} workExperience={workExperience} 
      setWorkExperience={setWorkExperience}/>]
  )
  
  
  useEffect(() => {
    setCv(
      {
        ...cv,
      workExperience: workExperience
      }
    );
  }, [workExperience])

  function addExperienceItem() {
    let idx = experienceItems.length;
    
    setExperienceItems(
      [...experienceItems,
      <ExperienceItem id={idx} key={idx} workExperience={workExperience} 
      setWorkExperience={setWorkExperience}/>]
    )

  }



  return (
    <div>
      {experienceItems.map((element) => {
        return element
      })}
      <button onClick={addExperienceItem}>Add</button>
    </div>
  )
}

export default InputWorkExperience
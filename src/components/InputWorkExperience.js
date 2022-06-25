import React, { useState, useContext, useEffect } from 'react'
import ExperienceItem from './InputWorkExperienceComponents/ExperienceItem';
import { CvContext } from '../context/CvContext';
import { v4 as uuidv4 } from 'uuid';

function InputWorkExperience() {

  const [cv, setCv] = useContext(CvContext);

  const [workExperience, setWorkExperience] = useState([
    {
      companyName: '',
      position: '',
      startDate: '',
      endDate: '',
      summary: '',
      id: uuidv4()
    },
  ]);

  useEffect(() => {
    setCv((prevState) => ({
      ...prevState,
      workExperience: workExperience
    }))
  }, [workExperience])

  const onDelete = (e, id) => {
    e.preventDefault();
    let modifiedWorkExperience = workExperience.filter(el => el.id !== id);
    setCv((prevState) => ({
      ...prevState,
      workExperience: modifiedWorkExperience
    }))
  }

  function addExperienceItem() {
    setCv((prevState) => ({
        ...prevState,
        workExperience: [
          ...prevState.workExperience,
          {
            companyName: '',
            position: '',
            startDate: '',
            endDate: '',
            summary: '',
            id: uuidv4()
          },
        ]

    }))
  }



  return (
    <div>
      {cv.workExperience.map((element) => {
        return <ExperienceItem key={element.id} id={element.id} workExperience={cv.workExperience} setWorkExperience={setWorkExperience} onDelete={onDelete} />
      })}
      <button onClick={addExperienceItem}>Add</button>
    </div>
  )
}

export default InputWorkExperience
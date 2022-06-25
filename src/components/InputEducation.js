import React, { useState, useContext, useEffect } from 'react'
import { CvContext } from '../context/CvContext';
import { v4 as uuidv4 } from 'uuid';
import EducationItem from './InputEducationComponents/EducationItem';

function InputEducation() {

  const [cv, setCv] = useContext(CvContext);

  const [education, setEducation] = useState([
    {
      Institution: '',
      Degree: '',
      Grade: '',
      startDate: '',
      endDate: '',
      summary: '',
      id: uuidv4()
    },
  ]);

  useEffect(() => {
    setCv((prevState) => ({
      ...prevState,
      education: education
    }))
  }, [education])

  const onDelete = (e, id) => {
    e.preventDefault();
    let modifiedEducation = education.filter(el => el.id !== id);
    setCv((prevState) => ({
      ...prevState,
      education: modifiedEducation
    }))
  }

  function addEducationItem() {
    setCv((prevState) => ({
        ...prevState,
        education: [
          ...prevState.education,
          {
            Institution: '',
            Degree: '',
            Grade: '',
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
      {cv.education.map((element) => {
        return <EducationItem key={element.id} id={element.id} education={cv.education} setEducation={setEducation} onDelete={onDelete} />
      })}
      <button onClick={addEducationItem}>Add</button>
    </div>
  )
}

export default InputEducation
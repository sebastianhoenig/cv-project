import React, { useState, useContext, useEffect } from 'react'
import ExperienceItem from './InputWorkExperienceComponents/ExperienceItem';
import { CvContext } from '../context/CvContext';
import { v4 as uuidv4 } from 'uuid';
import WorkExperienceModal from './WorkExperienceModal';

function InputWorkExperience() {

  const [cv, setCv] = useContext(CvContext);

  const [modalOpen, setModalOpen] = useState(false);

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
    <div className="inputWorkExperience">
      <h4>Work Experience</h4>
      {cv.workExperience.map((element) => {
        return <ExperienceItem key={element.id} id={element.id} workExperience={cv.workExperience} setWorkExperience={setWorkExperience} onDelete={onDelete} />
      })}
      <button onClick={addExperienceItem}>Add</button>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      {modalOpen && <WorkExperienceModal setModalOpen={setModalOpen} workExperience={cv.workExperience} setWorkExperience={setWorkExperience} onDelete={onDelete} id={uuidv4()}/>}
    </div>
  )
}

export default InputWorkExperience
import React, { useState, useContext, useEffect } from 'react'
import ExperienceItem from './InputWorkExperienceComponents/ExperienceItem';
import { CvContext } from '../context/CvContext';
import { v4 as uuidv4 } from 'uuid';
import WorkExperienceModal from './WorkExperienceModal';
import '../components-css/InputWorkExperience.css'

function InputWorkExperience() {

  const [cv, setCv] = useContext(CvContext);

  const [modalOpen, setModalOpen] = useState(false);

  const [workExperience, setWorkExperience] = useState([]);

  useEffect(() => {
    setCv((prevState) => ({
      ...prevState,
      workExperience: workExperience
    }))
  }, [workExperience])

  const onDelete = (id) => {
    let modifiedWorkExperience = workExperience.filter(el => el.id !== id);
    setCv((prevState) => ({
      ...prevState,
      workExperience: modifiedWorkExperience
    }))
    setWorkExperience(modifiedWorkExperience);
  }

  return (
    <div className="inputWorkExperience">
      <h4>Work Experience</h4>
      <div className="inputWorkExperienceList">
        {workExperience.map((element) => {
          console.log(element);
          return <ExperienceItem key={element.id} id={element.id} element={element} setModalOpen={setModalOpen} onDelete={onDelete}
          workExperience={cv.workExperience} setWorkExperience={setWorkExperience}/>
        })}
      </div>
      <button className="modalButton" onClick={() => setModalOpen(true)}>Add Experience</button>
      {modalOpen && <div className="overlay" onClick={() => setModalOpen(false)}>
        <WorkExperienceModal setModalOpen={setModalOpen} workExperience={cv.workExperience} setWorkExperience={setWorkExperience} id={uuidv4()}/>
      </div>}
    </div>
  )
}

export default InputWorkExperience
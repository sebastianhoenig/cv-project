import React, { useState } from 'react';
import '../components-css/Modal.css'
import CompanyName from './InputWorkExperienceComponents/CompanyName';
import Position from './InputWorkExperienceComponents/Position';
import EndDate from './Utils/EndDate';
import StartDate from './Utils/StartDate';
import Summary from './Utils/Summary';

function WorkExperienceModal( {setModalOpen, workExperience, setWorkExperience, id} ) {

  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [summary, setSummary] = useState([]);

  const updateSummary = (updatedSummary) => {
    let newString = updatedSummary.split("\n");
    let modified = newString.filter((el) => el);
    setSummary(modified);
  }

  const addExperience = () => {
    let updateWorkExperience = [...workExperience];
    let all_id = workExperience.map((e) => e.id)
    if (!(all_id.includes(id))) {
      updateWorkExperience = [...workExperience, 
      {
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
        summary: '',
        id: id
      }]
    }
    let modified = updateWorkExperience.map(
      el => el.id === id? {...el, companyName:companyName, position:position,
      startDate:startDate, endDate:endDate, summary:summary} : el
    )
    setWorkExperience(
      modified
    );
    setModalOpen(false);
  }

  return (
    <div className="modalBackground" onClick={() => setModalOpen(false)}>
      <div className="modalContainer">
        <div className="modal-title">
          <h4>Add Work Experience</h4>
          <button className="modal-x" onClick={() => setModalOpen(false)}>&times;</button>
        </div>
        <div className="experience-input">
          <div className="modal-company-information">
            <CompanyName setCompanyName = {setCompanyName}/>  
            <Position setPosition = {setPosition}/>
          </div>
          <div className="modal-timerange">
            <StartDate setStartDate = {setStartDate}/>
            <EndDate setEndDate = {setEndDate}/>
          </div>
          <div className="modal-summary">
            <Summary setSummary = {updateSummary}/>
          </div>
        </div>
        <div className="footer">
          <button className="modal-button" onClick={() => addExperience()}>Add</button>
          <button className="modal-button" onClick={() => setModalOpen(false)}>Cancel</button>
        </div>
      </div>
      
    </div>
  )
}

export default WorkExperienceModal
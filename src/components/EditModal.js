import React, { useState } from 'react';
import '../components-css/Modal.css'
import CompanyName from './InputWorkExperienceComponents/CompanyName';
import Position from './InputWorkExperienceComponents/Position';
import EndDate from './Utils/EndDate';
import StartDate from './Utils/StartDate';
import Summary from './Utils/Summary';

function EditModal( {setEditModal, element, onEdit, id, workExperience, setWorkExperience} ) {


  const [companyName, setCompanyName] = useState(element.companyName);
  const [position, setPosition] = useState(element.position);
  const [startDate, setStartDate] = useState(element.startDate);
  const [endDate, setEndDate] = useState(element.endDate);
  const [summary, setSummary] = useState(element.summary);

  const updateSummary = (updatedSummary) => {
    console.log(summary);
    console.log(updatedSummary);
    let newString = updatedSummary.split("\n");
    let modified = newString.filter((el) => el);
    console.log(modified);
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
    setEditModal(false);
  }

  return (
    <div className="modalBackground" onClick={() => setEditModal(false)}>
      <div className="modalContainer">
        <div className="modal-title">
          <h3>Edit Work Experience</h3>
          <button className="modal-x" onClick={() => setEditModal(false)}>&times;</button>
        </div>
        <br />
        <br />
        <div className="experience-input">
          <div className="modal-company-information">
            <CompanyName setCompanyName = {setCompanyName} companyName={companyName}/>  
            <Position setPosition = {setPosition} position={position}/>
          </div>
          <div className="modal-timerange">
            <StartDate setStartDate = {setStartDate} startDate={startDate}/>
            <EndDate setEndDate = {setEndDate} endDate={endDate}/>
          </div>
          <div className="modal-summary">
            <Summary setSummary = {updateSummary} summary={summary}/>
          </div>
        </div>
        <div className="footer">
          <button className="modal-button" onClick={() => addExperience()}>Edit</button>
          <button className="modal-button" onClick={() => setEditModal(false)}>Cancel</button>
        </div>
      </div>
      
    </div>
  )
}

export default EditModal
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons';
import '../../components-css/ExperienceItem.css';
import EditModal from '../EditModal';

function ExperienceItem( {id, element, setModalOpen, onDelete, onEdit, workExperience, setWorkExperience} ) {

  const [editModal, setEditModal] =  useState(false);

  return (
    <div className="experience-item">
      <div className="name">
        {element.companyName}
      </div>
      <div className="edit-buttons">
        <div>
          <FontAwesomeIcon onClick={() => setEditModal(true)} className="edit-button" icon={faPenToSquare}></FontAwesomeIcon>
        </div>
        <div>
          <FontAwesomeIcon onClick={() => onDelete(element.id)} className="x-button" icon={faX}></FontAwesomeIcon>
        </div>
      </div>
      {editModal && <EditModal setEditModal={setEditModal} element={element} onEdit={onEdit} id={id} workExperience={workExperience} setWorkExperience={setWorkExperience}/>}
    </div>
  )
}

export default ExperienceItem

/**
 * <CompanyName setCompanyName = {setCompanyName}/>  
      <Position setPosition = {setPosition}/>
      <StartDate setStartDate = {setStartDate}/>
      <EndDate setEndDate = {setEndDate}/>
      <Summary setSummary = {setSummary}/>
      <DeleteButton id={id} onDelete={onDelete} />
 */
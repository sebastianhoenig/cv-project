import React from 'react';
import '../components-css/WorkExperienceModal.css'

function WorkExperienceModal( {setModalOpen} ) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => setModalOpen(false)}>X</button>
        <div className="title">
          <h1>Add Work Experience</h1>
        </div>
        <div className="body">
          
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
        </div>
        <div className="footer">
          <button onClick={() => setModalOpen(false)}>Cancel</button>
          <button>Add</button>
        </div>
      </div>
      
    </div>
  )
}

export default WorkExperienceModal
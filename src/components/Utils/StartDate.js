import React from 'react';
import '../../components-css/Modal.css'

function StartDate( {setStartDate, startDate} ) {
  return (
    <div className="modal-input-div">
      <input 
        className="modal-input-field"
        placeholder="Start date"
        type="text" 
        name="startDateInput" 
        id="startDateInput" 
        value={startDate}
        onFocus={(e) => e.target.type="date"}
        onBlur={(e) => e.target.type="text"}
        onChange={(e) => setStartDate(e.target.value)}/>
    </div>
  )
}

export default StartDate

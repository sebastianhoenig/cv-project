import React from 'react'
import '../../components-css/Modal.css';

function EndDate( {setEndDate} ) {
  return (
    <div className="modal-input-div">
      <input 
        className="modal-input-field"
        placeholder="End date"
        type="text" 
        name="endDateInput" 
        id="endDateInput" 
        onFocus={(e) => e.target.type="date"}
        onBlur={(e) => e.target.type="text"}
        onChange={(e) => setEndDate(e.target.value)}/>
    </div>
  )
}

export default EndDate
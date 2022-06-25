import React from 'react'
import '../../components-css/InputGeneralInformation.css'


function DateOfBirth( {setDateOfBirth} ) {
  return (
    <div className="input-div ">
      <input 
        className="input-field " 
        placeholder="Date of Birth"
        type="text" 
        name="dateInput" 
        id="dateInput" 
        onFocus={(e) => e.target.type = "date"}
        onBlur={(e) => e.target.type = "text"}
        onChange={(e) => setDateOfBirth(e.target.value)} />
    </div>
  )
}

export default DateOfBirth
import React from 'react'

function DateOfBirth( {setDateOfBirth} ) {
  return (
    <div>
      <input 
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
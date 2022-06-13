import React from 'react'

function DateOfBirth( {setDateOfBirth} ) {
  return (
    <div>
      <label htmlFor="dateInput">Enter birth date</label>
      <input 
        type="date" 
        name="dateInput" 
        id="dateInput" 
        onChange={(e) => setDateOfBirth(e.target.value)} />
    </div>
  )
}

export default DateOfBirth
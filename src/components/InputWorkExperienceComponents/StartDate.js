import React from 'react'

function StartDate( {setStartDate} ) {
  return (
    <div>
      <label htmlFor="startDateInput">Enter Start Date</label>
      <input 
        type="text" 
        name="startDateInput" 
        id="startDateInput" 
        onChange={(e) => setStartDate(e.target.value)}/>
    </div>
  )
}

export default StartDate

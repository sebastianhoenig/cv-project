import React from 'react'

function StartDate( {setStartDate} ) {
  return (
    <div>
      <input 
        placeholder="Start date"
        type="text" 
        name="startDateInput" 
        id="startDateInput" 
        onFocus={(e) => e.target.type="date"}
        onBlur={(e) => e.target.type="text"}
        onChange={(e) => setStartDate(e.target.value)}/>
    </div>
  )
}

export default StartDate

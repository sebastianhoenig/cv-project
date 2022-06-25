import React from 'react'

function EndDate( {setEndDate} ) {
  return (
    <div>
      <input 
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
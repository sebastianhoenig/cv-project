import React from 'react'

function EndDate( {setEndDate} ) {
  return (
    <div>
      <label htmlFor="endDateInput">Enter End Date</label>
      <input 
        type="text" 
        name="endDateInput" 
        id="endDateInput" 
        onChange={(e) => setEndDate(e.target.value)}/>
    </div>
  )
}

export default EndDate
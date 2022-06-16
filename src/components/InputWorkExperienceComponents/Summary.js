import React from 'react'

function Summary( {setSummary} ) {
  return (
    <div>
      <label htmlFor="summaryInput">Enter Summary</label>
      <input 
        type="text" 
        name="summaryInput" 
        id="summaryInput" 
        onChange={(e) => setSummary(e.target.value)}/>
    </div>
  )
}

export default Summary
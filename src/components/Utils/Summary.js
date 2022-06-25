import React from 'react'

function Summary( {setSummary} ) {
  return (
    <div>
      <input 
        placeholder="Summary"
        type="text" 
        name="summaryInput" 
        id="summaryInput" 
        onChange={(e) => setSummary(e.target.value)}/>
    </div>
  )
}

export default Summary
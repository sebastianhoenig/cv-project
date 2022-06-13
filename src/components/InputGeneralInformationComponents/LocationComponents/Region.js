import React from 'react'

function Region( {setRegion} ) {
  return (
    <div>
      <label htmlFor="regionInput">Region </label>
      <input 
        type="text" 
        name="regionInput" 
        id="regionInput"
        onChange={(e) => setRegion(e.target.value)}/>
    </div>
  )
}

export default Region
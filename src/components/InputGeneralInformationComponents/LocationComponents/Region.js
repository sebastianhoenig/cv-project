import React from 'react'

function Region( {setRegion} ) {
  return (
    <div>
      <input 
        placeholder="Region"
        type="text" 
        name="regionInput" 
        id="regionInput"
        onChange={(e) => setRegion(e.target.value)}/>
    </div>
  )
}

export default Region
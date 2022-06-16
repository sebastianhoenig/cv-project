import React from 'react'

function Position( {setPosition} ) {
  return (
    <div>
      <label htmlFor="positionInput">Enter Position</label>
      <input 
        type="text" 
        name="positionInput" 
        id="positionInput" 
        onChange={(e) => setPosition(e.target.value)}/>
    </div>
  )
}

export default Position
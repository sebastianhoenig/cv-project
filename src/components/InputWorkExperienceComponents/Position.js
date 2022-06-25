import React from 'react'

function Position( {setPosition} ) {
  return (
    <div>
      <input 
        placeholder="Position"
        type="text" 
        name="positionInput" 
        id="positionInput" 
        onChange={(e) => setPosition(e.target.value)}/>
    </div>
  )
}

export default Position
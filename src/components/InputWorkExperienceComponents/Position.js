import React from 'react'

function Position( {setPosition, position} ) {
  return (
    <div className="modal-input-div">
    <input 
        className="modal-input-field"
        placeholder="Position"
        type="text" 
        name="positionInput" 
        id="positionInput" 
        value={position}
        onChange={(e) => setPosition(e.target.value)}/>
    </div>
  )
}

export default Position
import React from 'react'

function FullName({ setFullName }) {
  return (
    <div className="input-div ">
      <input 
        className="input-field " 
        placeholder="Full name"
        type="text" 
        name="fullNameInput" 
        id="fullNameInput" 
        onChange={(e) => setFullName(e.target.value)}/>
    </div>
  )
}

export default FullName
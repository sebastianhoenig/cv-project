import React from 'react'

function FullName({ setFullName }) {
  return (
    <div>
      <label htmlFor="fullNameInput">Enter full name</label>
      <input 
        type="text" 
        name="fullNameInput" 
        id="fullNameInput" 
        onChange={(e) => setFullName(e.target.value)}/>
    </div>
  )
}

export default FullName
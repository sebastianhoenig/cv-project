import React from 'react'

function FullName({ setFullName }) {
  return (
    <div>
      <input 
        placeholder="Full name"
        type="text" 
        name="fullNameInput" 
        id="fullNameInput" 
        onChange={(e) => setFullName(e.target.value)}/>
    </div>
  )
}

export default FullName
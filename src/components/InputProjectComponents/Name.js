import React from 'react'

function Name( {setName} ) {
  return (
    <div>
      <input 
        placeholder='Name'
        type="text" 
        name="nameInput" 
        id="nameInput" 
        onChange={(e) => {
          setName(e.target.value)}}/>
    </div>
  )
}

export default Name
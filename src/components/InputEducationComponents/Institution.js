import React from 'react'

function Institution( {setInstitution} ) {
  return (
    <div>
      <input 
        placeholder='Institution'
        type="text" 
        name="institutionInput" 
        id="institutionInput" 
        onChange={(e) => {
          setInstitution(e.target.value)}}/>
    </div>
  )
}

export default Institution
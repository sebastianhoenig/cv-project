import React from 'react'

function Degree( {setDegree} ) {
  return (
    <div>
      <input 
        placeholder='Degree'
        type="text" 
        name="degreeInput" 
        id="degreeInput" 
        onChange={(e) => {
          setDegree(e.target.value)}}/>
    </div>
  )
}

export default Degree
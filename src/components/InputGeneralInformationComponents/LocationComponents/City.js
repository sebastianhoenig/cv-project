import React from 'react'

function City( {setCity} ) {
  return (
    <div>
      <label htmlFor="cityInput">City </label>
      <input 
        type="text" 
        name="cityInput" 
        id="cityInput" 
        onChange={(e) => setCity(e.target.value)}/>
    </div>
  )
}

export default City
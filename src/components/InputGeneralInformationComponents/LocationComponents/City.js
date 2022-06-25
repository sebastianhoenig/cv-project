import React from 'react'

function City( {setCity} ) {
  return (
    <div>
      <input 
        placeholder="City"
        type="text" 
        name="cityInput" 
        id="cityInput" 
        onChange={(e) => setCity(e.target.value)}/>
    </div>
  )
}

export default City
import React from 'react'

function Country( {setCountry} ) {
  return (
    <div>
      <input 
        placeholder="Country"
        type="text" 
        name="countryInput" 
        id="countryInput" 
        onChange={(e) => setCountry(e.target.value)}/>
    </div>
  )
}

export default Country
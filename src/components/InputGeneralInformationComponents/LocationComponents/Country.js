import React from 'react'

function Country( {setCountry} ) {
  return (
    <div>
      <label htmlFor="countryInput">Country </label>
      <input 
        type="text" 
        name="countryInput" 
        id="countryInput" 
        onChange={(e) => setCountry(e.target.value)}/>
    </div>
  )
}

export default Country
import React from 'react'

function Email( {setEmail} ) {
  return (
    <div>
      <label htmlFor="emailInput">Enter mail</label>
      <input 
        type="email" 
        name="emailInput" 
        id="emailInput" 
        onChange={(e) => setEmail(e.target.value)}/>
    </div>
  )
}

export default Email
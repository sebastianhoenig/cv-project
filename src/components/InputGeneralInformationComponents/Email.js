import React from 'react'

function Email( {setEmail} ) {
  return (
    <div className="input-div">
      <input 
        className="input-field"
        placeholder="Email Adress"
        type="email" 
        name="emailInput" 
        id="emailInput" 
        onChange={(e) => setEmail(e.target.value)}/>
    </div>
  )
}

export default Email
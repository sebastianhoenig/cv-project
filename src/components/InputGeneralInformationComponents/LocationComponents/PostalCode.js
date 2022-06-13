import React from 'react'

function PostalCode( {setPostalCode} ) {
  return (
    <div>
      <label htmlFor="postalCodeInput">Postal Code </label>
      <input 
        type="text" 
        name="postalCodeInput" 
        id="postalCodeInput" 
        onChange={(e) => setPostalCode(e.target.value)}/>
    </div>
  )
}

export default PostalCode
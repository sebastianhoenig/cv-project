import React from 'react'

function PostalCode( {setPostalCode} ) {
  return (
    <div>
      <input 
        placeholder="Postal code"
        type="text" 
        name="postalCodeInput" 
        id="postalCodeInput" 
        onChange={(e) => setPostalCode(e.target.value)}/>
    </div>
  )
}

export default PostalCode
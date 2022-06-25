import React from 'react'

function PhoneNumber( {setPhoneNumber} ) {
  return (
    <div>
      <input 
        placeholder="Phone number"
        type="text" 
        name="phoneNumberInput" 
        id="phoneNumberInput"
        onChange={(e) => setPhoneNumber(e.target.value)} />
    </div>
  )
}

export default PhoneNumber
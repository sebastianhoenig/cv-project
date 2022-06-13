import React from 'react'

function PhoneNumber( {setPhoneNumber} ) {
  return (
    <div>
      <label htmlFor="phoneNumberInput">Enter phone number</label>
      <input 
        type="text" 
        name="phoneNumberInput" 
        id="phoneNumberInput"
        onChange={(e) => setPhoneNumber(e.target.value)} />
    </div>
  )
}

export default PhoneNumber
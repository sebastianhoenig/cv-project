import React from 'react'

function PhoneNumber( {setPhoneNumber} ) {
  return (
    <div className="input-div">
      <input 
        className="input-field"
        placeholder="Phone number"
        type="text" 
        name="phoneNumberInput" 
        id="phoneNumberInput"
        onChange={(e) => setPhoneNumber(e.target.value)} />
    </div>
  )
}

export default PhoneNumber
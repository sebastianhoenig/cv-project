import React from 'react';
import '../../../components-css/InputGeneralInformation.css';

function Country( {setCountry} ) {
  return (
    <div className="input-div-last">
      <input 
        className="input-field"
        placeholder="Country"
        type="text" 
        name="countryInput" 
        id="countryInput" 
        onChange={(e) => setCountry(e.target.value)}/>
    </div>
  )
}

export default Country
import React from 'react';
import '../../../components-css/InputGeneralInformation.css';

function City( {setCity} ) {
  return (
    <div className="input-div">
      <input 
        className="input-field"
        placeholder="City"
        type="text" 
        name="cityInput" 
        id="cityInput" 
        onChange={(e) => setCity(e.target.value)}/>
    </div>
  )
}

export default City
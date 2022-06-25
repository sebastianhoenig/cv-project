import React from 'react';
import '../../../components-css/InputGeneralInformation.css';

function Region( {setRegion} ) {
  return (
    <div className="input-div-last">
      <input 
        className="input-field"
        placeholder="Region"
        type="text" 
        name="regionInput" 
        id="regionInput"
        onChange={(e) => setRegion(e.target.value)}/>
    </div>
  )
}

export default Region
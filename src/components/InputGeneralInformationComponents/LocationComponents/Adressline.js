import React from 'react';
import '../../../components-css/InputGeneralInformation.css';

function Adressline( {setAdressline} ) {

  return (
    <div className="input-div">
      <input 
        className="input-field"
        placeholder="Adressline"
        type="text" 
        name="adressInput" 
        id="adressInput"
        onChange={(e) => setAdressline(e.target.value)} />
    </div>
  )
}

export default Adressline
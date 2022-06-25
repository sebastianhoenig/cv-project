import React from 'react';
import '../../../components-css/InputGeneralInformation.css';

function PostalCode( {setPostalCode} ) {
  return (
    <div className="input-div-postal">
      <input 
        className="input-field"
        placeholder="ZIP"
        type="text" 
        name="postalCodeInput" 
        id="postalCodeInput" 
        onChange={(e) => setPostalCode(e.target.value)}/>
    </div>
  )
}

export default PostalCode
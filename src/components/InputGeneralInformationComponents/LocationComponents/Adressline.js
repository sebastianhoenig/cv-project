import React from 'react';

function Adressline( {setAdressline} ) {

  return (
    <div>
      <input 
        placeholder="Adressline"
        type="text" 
        name="adressInput" 
        id="adressInput"
        onChange={(e) => setAdressline(e.target.value)} />
    </div>
  )
}

export default Adressline
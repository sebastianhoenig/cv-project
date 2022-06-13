import React, { useContext } from 'react';
import { CvContext } from '../../../context/CvContext';

function Adressline( {setAdressline} ) {
  const cv = useContext(CvContext);

  return (
    <div>
      <label htmlFor="adressInput">Adress </label>
      <input 
        type="text" 
        name="adressInput" 
        id="adressInput"
        onChange={(e) => setAdressline(e.target.value)} />
    </div>
  )
}

export default Adressline
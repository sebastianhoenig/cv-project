import React, {useState, useEffect} from 'react'
import Country from './LocationComponents/Country';
import Region from './LocationComponents/Region';
import PostalCode from './LocationComponents/PostalCode';
import City from './LocationComponents/City';
import Adressline from './LocationComponents/Adressline';
import '../../components-css/InputGeneralInformation.css'


function Location( {setLocation} ) {

  const [adressline, setAdressline] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    setLocation({
      adressline: adressline,
      city: city,
      country: country,
      postalCode: postalCode,
      region: region
    });
  }, [adressline, city, postalCode, region, country])

  return (
    <div>
      <div className="adressline-personal">
        <Adressline setAdressline ={setAdressline}/>
        <City setCity = {setCity}/>
      </div>
      <div className="adressline-region-total">
          <PostalCode setPostalCode = {setPostalCode}/>
        <div className="adressline-region">
          <Region setRegion = {setRegion}/>
          <Country setCountry = {setCountry}/>
        </div>
      </div>
    </div>
  )
}

export default Location
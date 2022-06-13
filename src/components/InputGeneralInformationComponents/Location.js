import React, {useState, useEffect} from 'react'
import Country from './LocationComponents/Country';
import Region from './LocationComponents/Region';
import PostalCode from './LocationComponents/PostalCode';
import City from './LocationComponents/City';
import Adressline from './LocationComponents/Adressline';


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
      <Adressline setAdressline ={setAdressline}/>
      <City setCity = {setCity}/>
      <PostalCode setPostalCode = {setPostalCode}/>
      <Region setRegion = {setRegion}/>
      <Country setCountry = {setCountry}/>
    </div>
  )
}

export default Location
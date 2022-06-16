import React, { useState, useContext, useEffect } from 'react';
import FullName from './InputGeneralInformationComponents/FullName';
import Email from './InputGeneralInformationComponents/Email';
import DateOfBirth from './InputGeneralInformationComponents/DateOfBirth';
import Location from './InputGeneralInformationComponents/Location';
import PhoneNumber from './InputGeneralInformationComponents/PhoneNumber';
import { CvContext } from '../context/CvContext';


function InputGeneralInformation() {

  const [cv, setCv] = useContext(CvContext);

  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState({
    adressline: '',
    city: '',
    country: '',
    postalCode: '',
    region: ''
  });

  useEffect(() => {
    setCv(
      {
        ...cv,
        generalInformation: {
          fullName: fullName,
          dateOfBirth: dateOfBirth,
          email: email,
          phoneNumber: phoneNumber, 
          location: location
        }
      });
  }, [fullName, dateOfBirth, email, phoneNumber, location])

  return (
    <div>
      <FullName setFullName = {setFullName}/>  
      <Email setEmail = {setEmail}/>
      <DateOfBirth setDateOfBirth = {setDateOfBirth}/>
      <PhoneNumber setPhoneNumber = {setPhoneNumber}/>
      <Location setLocation = {setLocation}/>
    </div>
  )
}

export default InputGeneralInformation
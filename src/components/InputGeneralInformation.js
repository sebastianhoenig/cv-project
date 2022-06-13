import React, { useState, useContext } from 'react';
import FullName from './InputGeneralInformationComponents/FullName';
import Email from './InputGeneralInformationComponents/Email';
import DateOfBirth from './InputGeneralInformationComponents/DateOfBirth';
import Location from './InputGeneralInformationComponents/Location';
import PhoneNumber from './InputGeneralInformationComponents/PhoneNumber';
import SubmitButton from './InputGeneralInformationComponents/SubmitButton';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setCv(
      {
        generalInformation: {
          fullName: fullName,
          dateOfBirth: dateOfBirth,
          email: email,
          phoneNumber: phoneNumber, 
          location: location
        }
      });
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FullName setFullName = {setFullName}/>  
        <Email setEmail = {setEmail}/>
        <DateOfBirth setDateOfBirth = {setDateOfBirth}/>
        <PhoneNumber setPhoneNumber = {setPhoneNumber}/>
        <Location setLocation = {setLocation}/>
        <SubmitButton />
      </form>   
    </div>
  )
}

export default InputGeneralInformation
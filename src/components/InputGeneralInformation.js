import React, { useState, useContext, useEffect } from 'react';
import FullName from './InputGeneralInformationComponents/FullName';
import Email from './InputGeneralInformationComponents/Email';
import DateOfBirth from './InputGeneralInformationComponents/DateOfBirth';
import Location from './InputGeneralInformationComponents/Location';
import PhoneNumber from './InputGeneralInformationComponents/PhoneNumber';
import { CvContext } from '../context/CvContext';
import '../components-css/InputGeneralInformation.css'


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
    <div className="inputGeneralInformation">
      <h4>Personal Information</h4>
      <div className="generalInputFields">
        <div className="personal">
          <FullName setFullName = {setFullName}/> 
          <DateOfBirth setDateOfBirth = {setDateOfBirth}/> 
        </div>
        <div className="contact">
          <Email setEmail = {setEmail}/>
          <PhoneNumber setPhoneNumber = {setPhoneNumber}/>
        </div>
        <div>
          <Location setLocation = {setLocation}/>
        </div>
      </div>
    </div>
  )
}

export default InputGeneralInformation
import React, { useState, useContext } from 'react';
import { CvContext } from '../context/CvContext';
import '../components-css/OutputGeneralInformation.css';


function OutputGeneralInformation() {

  const [cv, setCv] = useContext(CvContext);

  const generalInformation = {
    fullName: 'Sebastian Hönig',
    dateOfBirth: '29.12.1997',
    email: 'hoenigsebastian@gmail.com',
    phoneNumber: '+49 15224528396', 
    location: {
      adressline: 'Sudermannstraße 14',
      city: 'Frankfurt am Main',
      country: 'Germany',
      postalCode: '64031',
      region: 'Hesse'
    }}

  return (
    <div className="outputGeneralInformation">
      <div className="side adress">
        {generalInformation.location.adressline} <br />
        {generalInformation.location.postalCode}, {generalInformation.location.city}  <br />
        {generalInformation.location.region}, {generalInformation.location.country}
      </div>
      <div className="fullName">
        {generalInformation.fullName}
      </div>
      <div className="side connection">
      {generalInformation.email} <br />
      {generalInformation.phoneNumber}
      </div>
      {/*generalInformation.dateOfBirth*/}
    </div>
  )
}

export default OutputGeneralInformation
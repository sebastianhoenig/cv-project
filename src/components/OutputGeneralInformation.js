import React, { useState, useContext } from 'react';
import { CvContext } from '../context/CvContext';

function OutputGeneralInformation() {

  const [cv, setCv] = useContext(CvContext);

  return (
    <div>
      {cv.generalInformation.fullName} <br />
      {cv.generalInformation.dateOfBirth} <br />
      {cv.generalInformation.email} <br />
      {cv.generalInformation.phoneNumber} <br />
      {cv.generalInformation.location.adressline} <br />
      {cv.generalInformation.location.city}  <br />
      {cv.generalInformation.location.country} <br />
      {cv.generalInformation.location.postalCode} <br />
      {cv.generalInformation.location.region}
    </div>
  )
}

export default OutputGeneralInformation
import React from 'react'

function CompanyName( {setCompanyName} ) {
  return (
    <div>
      <label htmlFor="companyNameInput">Enter Company Name</label>
      <input 
        type="text" 
        name="companyNameInput" 
        id="companyNameInput" 
        onChange={(e) => {
          setCompanyName(e.target.value)}}/>
    </div>
  )
}



export default CompanyName
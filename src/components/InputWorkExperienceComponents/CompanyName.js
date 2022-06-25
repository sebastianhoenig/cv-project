import React from 'react'

function CompanyName( {setCompanyName} ) {
  return (
    <div>
      <input 
        placeholder="Company"
        type="text" 
        name="companyNameInput" 
        id="companyNameInput" 
        onChange={(e) => {
          setCompanyName(e.target.value)}}/>
    </div>
  )
}



export default CompanyName
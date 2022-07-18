import React from 'react'

function CompanyName( {setCompanyName, companyName} ) {
  console.log(companyName);
  return (
    <div className="modal-input-div">
      <input 
        className="modal-input-field"
        placeholder="Company"
        type="text" 
        name="companyNameInput" 
        id="companyNameInput" 
        value={companyName}
        onChange={(e) => {
          setCompanyName(e.target.value)}}/>
    </div>
  )
}



export default CompanyName
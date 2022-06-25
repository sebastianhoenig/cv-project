import React from 'react'

function CompanyName( {setCompanyName} ) {
  return (
    <div className="modal-input-div">
      <input 
        className="modal-input-field"
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
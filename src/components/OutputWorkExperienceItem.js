import React from 'react'

function OutputWorkExperienceItem( {content} ) {
  return (
    <div>
      {content.companyName} <br />
      {content.position} <br />
      {content.startDate} <br />
      {content.endDate} <br />
      {content.summary} <br />
    </div>
  )
}

export default OutputWorkExperienceItem
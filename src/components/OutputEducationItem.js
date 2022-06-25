import React from 'react'
import '../components-css/OutputEducationItem.css'

function OutputEducationItem( {content} ) {

  const transformedSummary = content.summary.map((el)=>{
    return <li>{el}</li>;
  });

  return (
    <div className="item">
      <div className="headline-education">
        <div className="degree">
          {content.degree}
        </div>
        <div className="institution">
          {content.institution}
        </div>
        <div className="timerange">
          {content.startDate} - {content.endDate} 
        </div>
      </div>
        <ul>
          {transformedSummary}
        </ul>
      </div>
  )
}

export default OutputEducationItem

/**
 * const transformedSummary = content.summary.map((el)=>{
    return <li>{el}</li>;
  });

  return (
    <div className="item">
      <div className="headline-job">
        <div className="position">
          {content.position}
        </div>
        <div className="companyName">
          {content.companyName}
        </div>
        <div className="timerange">
          {content.startDate} - {content.endDate} 
        </div>
      </div>
      <ul>
        {transformedSummary}
      </ul>
    </div>
 */
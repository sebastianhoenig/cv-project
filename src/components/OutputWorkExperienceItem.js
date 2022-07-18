import React from 'react'
import '../components-css/OutputWorkExperienceItem.css'


function OutputWorkExperienceItem( {content} ) {

  const transformedSummary = content.summary.map((el)=>{
    return <li>{el}</li>;
  });

  const transformedDate = (inputDate) => {
    let date = new Date(inputDate);
    let month = date.getMonth();
    let year = date.getFullYear();
    if (month < 10) {
      month = '0' + month;
    }
    return month + '/' + year
  } 

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
          {transformedDate(content.startDate)} - {transformedDate(content.endDate)} 
        </div>
      </div>
      <ul>
        {transformedSummary}
      </ul>
    </div>
  )
}

export default OutputWorkExperienceItem

/**
 *    {workExperience.map((element, idx) => {
          return <OutputWorkExperienceItem key={idx} content={element}/>
 */
import React from 'react'
import '../components-css/OutputProjectItem.css'

function OutputProjectItem( {content} ) {

  const transformedSummary = content.summary.map((el)=>{
    return <li>{el}</li>;
  });

  const transformedLink = content.link.substring(0,7) !== 'http://' ? 'http://' + content.link: content.link;

  return (
    <div className="item">
      <div className="headline-project">
        <div className="name">
          {content.name}
        </div>
        <div className="linkDiv">
          <a className="link" href={transformedLink} target="_blank">Github Link</a>
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

export default OutputProjectItem
import React from 'react'

function OutputProjectItem( {content} ) {
  return (
    <div>
      {content.name} <br />
      {content.link} <br />
      {content.startDate} <br />
      {content.endDate} <br />
      {content.summary} <br />
    </div>
  )
}

export default OutputProjectItem
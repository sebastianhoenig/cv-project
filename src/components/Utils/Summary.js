import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import '../../components-css/Modal.css'

function Summary( {setSummary, summary} ) {

  const contentEditableRef = useRef();
  const [val, setVal] = useState([]);

  useEffect(() => {
    let updSummary = [];
    if (summary) {
      for (let i of summary) {
        updSummary.push(<div>{i}</div>) 
      }
    }
    setVal(updSummary)
  }, [summary])

  return (
    <div 
      ref={contentEditableRef}
      className="editable summaryInput" 
      contentEditable="true" 
      placeholder="Enter Summary" onBlur={(e) => setSummary(e.currentTarget.innerText)}>
        {val}
    </div>
  )
}

export default Summary

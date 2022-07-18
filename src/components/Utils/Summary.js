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

/**
 *       <textarea 
        className="summaryInput"
        name="summaryInput" 
        id="summaryInput" 
        cols="63" 
        rows="6"
        placeholder="Enter summary"
        onChange={(e) => setSummary(e.target.value)}>
        </textarea>
 */
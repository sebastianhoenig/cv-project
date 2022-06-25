import React from 'react'
import '../../components-css/Modal.css'

function Summary( {setSummary} ) {
  return (
    <div 
      className="editable summaryInput" 
      contentEditable="true" 
      placeholder="Enter Summary" onInput={(e) => setSummary(e.currentTarget.innerText)}>
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
import React, { useState, useRef, useEffect } from 'react'
import '../../components-css/Modal.css'
import ContentEditable from 'react-contenteditable';

function EditSummary( {setSummary, summary} ) {

  const [text, setText] = useState("");

  const contentEditableRef = useRef();
  let updSummary = [];


  useEffect(() => {
    setText(summary.join("<br>"));
  },[summary])


  const handleChange = () => {
    setSummary(contentEditableRef.current.innerText.toString());
  }

  const handleKey = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      console.log("key was enter")
      let newText = text + "<br>"
      console.log(newText);
      setText(newText);
    }
  }


  return (
    <ContentEditable 
    innerRef={contentEditableRef} 
    className='editable summaryInput' 
    html={text} 
    onChange={handleChange} 
    onKeyDown={handleKey}
    />
  );
  return (
    <div 
      className="editable summaryInput" 
      contentEditable="true" 
      placeholder="Enter Summary" onInput={(e) => setSummary(e.currentTarget.innerText)}>
        {updSummary}
    </div>
  )
}

export default EditSummary
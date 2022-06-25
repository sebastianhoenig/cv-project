import React from 'react'

function Grade( {setGrade} ) {
  return (
    <div>
      <input 
        placeholder='Grade'
        type="text" 
        name="gradeInput" 
        id="gradeInput" 
        onChange={(e) => {
          setGrade(e.target.value)}}/>
    </div>
  )
}

export default Grade
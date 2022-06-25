import React from 'react'

function Link( {setLink} ) {
  return (
    <div>
      <input 
        placeholder='Website'
        type="text" 
        name="linkInput" 
        id="linkInput" 
        onChange={(e) => {
          setLink(e.target.value)}}/>
    </div>
  )
}

export default Link
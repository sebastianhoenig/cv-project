import React from 'react'

function DeleteButton( {id, onDelete} ) {

  return (
    <div>
      <button onClick={(e) => onDelete(e, id)}>Delete</button>
    </div>
  )
}

export default DeleteButton
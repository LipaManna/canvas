import React from 'react'

const FullContent = (props) => {
  return (
    <div className='full-content text-center common-pad'>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
    </div>
  )
}

export default FullContent
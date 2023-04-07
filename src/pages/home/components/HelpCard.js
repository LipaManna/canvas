import React from 'react'

const HelpCard = (props) => {
  return (
    <div className='help-card-wrap'>
        <div className='card-content'>
            <h4>{props.title}</h4>
            <p>{props.info}</p>
        </div>
    </div>
  )
}

export default HelpCard
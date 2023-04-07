import React from 'react'

const RowComponent = (props) => {
  return (
    <div className='row align-items-center'>
        <div className='col-lg-6'>
            <div className='img-wrap'>
                <img src={props.img}/>
            </div>
        </div>
        <div className='col-lg-6'>
            <div className='content'>
                <h3>{props.subhead}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    </div>
  )
}

export default RowComponent
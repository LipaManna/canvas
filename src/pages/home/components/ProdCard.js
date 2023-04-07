import React from 'react'

const ProdCard = (props) => {
  return (
    <div className='prod-card'>
        <div className='img-wrap'>
            <img src={props.img} />
        </div>
        <div className='prod-content text-center'>
            <h4>{props.title}</h4>
            <p>{props.price}</p>
        </div>
    </div>
  )
}

export default ProdCard
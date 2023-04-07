import React from 'react'
import { Link } from 'react-router-dom'

const Whatwedocard = (props) => {
  return (
    <div className='card'>
        <div className='img-wrap'>
            <img src={props.img}/>
        </div>
        <div className='card-title'>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <Link to="/" className='btn-trans'>Read More</Link>
        </div>
        
    </div>
  )
}

export default Whatwedocard
import React from 'react'
import lastbanner from '../../../assets/lastbanner.jpg'
import { Link } from 'react-router-dom'
const LastBanner = () => {
  return (
    <div className='last-banner' style={{backgroundImage:`url(${lastbanner}) ` }}>
        <div className='container'>
            <div className='content text-center'>
                <p>Want to adopt your a best friend?</p>
                <h3>Unconditional love is as close as your nearest Shelter.</h3>
                <Link to="/" className='btn-trans'>get a pet now</Link>
            </div>
        </div>
    </div>
  )
}

export default LastBanner
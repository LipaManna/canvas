import React from 'react'
import "./InnerBanner.scss"
import img from '../assets/inner-banner.jpg'


const InnerBanner = (props) => {
  return (
    <div className='inner-banner-wrap'style={{backgroundImage: `url(${img})`, padding:`${props.padding ? props.padding: '200px 0'}`}}>
        <div className='container'>
        <div className='text-center'> 
        <h1>{props.heading}</h1>
        </div>
        </div>
    </div>
  )
}

export default InnerBanner
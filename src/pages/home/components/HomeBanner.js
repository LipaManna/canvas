import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../../../assets/banner.jpg'
import '../home.scss'

const HomeBanner = () => {
  return (
    <main>
        <div className='banner' style={{backgroundImage:`url(${banner}) ` }}>
            <div className='container'>
               <div className='bannercontent text-center'>
                    <h1>Dogs are not our whole Life,<br/>
                      <span>But they make our Lives whole.</span></h1>
                      <p>Nisl blandit adipisci gravida blandit soluta, explicabo orci, distinctio
                      duis unde provident suspendisse orci? Recusandae! Proident,
                      quos do mi cupidatat.</p>
                    <Link to="/about" className='btn'>Learn More</Link>
               </div>
            </div>
        </div>
    </main>
  )
}

export default HomeBanner
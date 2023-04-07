import React from 'react'
import './footer.scss'
import { library } from '@fortawesome/fontawesome-svg-core'

import {fas} from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var FooterArray1=["Documentation","Feedback","Plugins","Support Forums","Themes","Canvas Blog","Canvas Planet"]

var FooterArray2=["Documentation","Feedback","Plugins","Support Forums","Themes","Canvas Blog","Canvas Planet"]

const Footer = () => {
  return (
    <div className='footer-wrap'>
        <div className='container'>
        <div className='row'>
            <div className='col-lg-4'>
                <div className='footer-col'>
                    <p>We believe in Simple, Creative & Flexible Design Standards.</p>
                    <h5>Headquarters:</h5>
                    <div className='address'>
                    <a href='https://www.google.com/maps/place/795+Folsom+St+%23600,+San+Francisco,+CA+94107,+USA/@37.7821198,-122.4026834,17z/data=!3m1!4b1!4m6!3m5!1s0x8085807e0e2f94db:0x152948b6410d9242!8m2!3d37.7821198!4d-122.4004947!16s%2Fg%2F11ll6v3t42' target='_blank'>795 Folsom Ave, Suite 600
                    San Francisco, CA 94107</a>
                    </div>
                    <p><strong>Phone: </strong>(1) <a  href='tel:8547 632521'> 8547 632521</a></p>
                    <p><strong>Email: </strong>(1)<a  href='mailto:info@canvas.com'> info@canvas.com</a> </p>
                </div>
            </div>
            <div className='col-lg-4'>
            <h5>BLOGROLL</h5>
            <ul className='footer-list'>
                {
                    FooterArray1.map(function(d,i){
                        return(
                            <li><a href=''><span><FontAwesomeIcon icon="fas fa-chevron-right"/></span>{FooterArray1[i]}</a></li>
                        )
                    })
                }
            </ul>
            </div>
            <div className='col-lg-4'>
            <h5>BLOGROLL</h5>
            <ul className='footer-list'>
                {
                    FooterArray2.map(function(d,i){
                        return(
                            <li><a href=''><span><FontAwesomeIcon icon="fas fa-chevron-right"/></span>{FooterArray1[i]}</a></li>
                        )
                    })
                }
            </ul>
            </div>
        </div>
        <div className='text-center text-muted mt-4'>
                <p>Copyrights © 2020 All Rights Reserved by Canvas Inc.</p>
        </div>
        </div>
    </div>
  )
}

export default Footer
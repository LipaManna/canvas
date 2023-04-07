import React from 'react'
import CounterWrap from './components/CounterWrap'
import HomeBanner from './components/HomeBanner' 
import ImgGalleryShow from './components/ImgGalleryShow'

import { JoinUs } from './components/JoinUs'
import LastBanner from './components/LastBanner'
import NeedHelp from './components/NeedHelp'
import Products from './components/Products'
import TestimonialSlider from './components/TestimonialSlider'
import WhatWeDo from './components/WhatWeDo'
import "./home.scss"


const HomeContainer = () => {
  return (
   <>
   <HomeBanner/>
   <WhatWeDo/>
   <JoinUs/>
   <CounterWrap/>
   <TestimonialSlider/>
    <ImgGalleryShow/>
    <Products/>
    <LastBanner/>
    <NeedHelp/>
   </>
  )
}

export default HomeContainer
import React from 'react'
import Whatwedocard from './Whatwedocard'
import '../home.scss'
let arr4=[{img:"https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",title:"Adopt A Dog",desc:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{img:"https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",title:"Find A Petsitter",desc:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{img:"https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",title:"Wellbeing",desc:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]

const WhatWeDo = () => {
  return (
    <div className='whatwedoContent common-pad'>
      <div className='container'>
          <div className='heading text-center'>
              <h2>What We Do</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur dolorum, voluptatum possimus temporibus vel ab, nesciunt quod!</p>
          </div>
          <div className='row'>
          
            {
              arr4.map(function(d,i){
                return(
                  <div className='col-lg-4'>
                    <Whatwedocard img={d.img} title={d.title} desc={d.desc}/>
                  </div>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default WhatWeDo
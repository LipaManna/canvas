import React from 'react'
import CounterElement from './CounterElement'
import CountUp, { useCountUp } from 'react-countup';
var arr2=[{number:400,title:'Happy Customers'},{number:150,title:'Pets Hosted'},{number:50,title:'Professionals'}]

export default function CounterWrap() {
  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });


  return (
    <div className='container'>
        <div className='counter-item-place'>
       <div className='row'>
       {
           arr2.map(function(d,i){
            return(
                <div className='col-lg-4'>
                 <div className='item'>
                 <CountUp end={d.number} enableScrollSpy/>
                 <div>
                 <p>{d.title}</p>
                 </div>
                 </div>
                </div>
            )
           })
        }
       </div>
    </div>
    </div>
  )
}

// export default CounterWrap
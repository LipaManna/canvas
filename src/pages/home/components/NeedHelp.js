import React from 'react'
import HelpCard from './HelpCard'

var array2=[{title:"Hire A Pet Sitter",info:"795 Folsom Ave, Suite 600 San Francisco, CA 94107"},{title:"Hire A Pet Sitter",info:"795 Folsom Ave, Suite 600 San Francisco, CA 94107"},{title:"Hire A Pet Sitter",info:"795 Folsom Ave, Suite 600 San Francisco, CA 94107"}]
const NeedHelp = () => {
  return (
    <div className='need-help-sec common-pad'>
        <div className='container'>
          <div className='row'>
            {
              array2.map(function(d,i){
                return(
                  <div className='col-lg-4'>
                  <HelpCard title={d.title} info={d.info}/>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default NeedHelp
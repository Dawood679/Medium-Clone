import React from 'react'
import Signupinputs from '../Components/Signupinputs'
import Quotes from '../Components/Quotes'

const Signin = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1'>
      
      <div>
        <Signupinputs type='Sign in' link='Signup'/>
      </div>
      <div className='hidden lg:block'>
        <Quotes />
      </div>
    </div>
  )
}

export default Signin




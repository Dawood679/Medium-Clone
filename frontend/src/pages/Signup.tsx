import React from 'react'
import Quotes from '../Components/Quotes'
import Signupinputs from '../Components/Signupinputs'

const Signup = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1'>
      
      <div>
        <Signupinputs type='Sign up' link='Signin'/>
      </div>
      <div className='hidden lg:block'>
        <Quotes/>
      </div>
    </div>
  )
}

export default Signup

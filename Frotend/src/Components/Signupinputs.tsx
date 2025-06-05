import  { useState, type ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { type SignupInput} from "@dawoodalam057/meduim-common"
import axios from 'axios'
import { BECKEND_URL } from './config'
const Signupinputs = ({type,link}:{type:"Sign up" | "Sign in",link:"Signup" | 'Signin'}) => {
    const [data,setdata] = useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })
    const navigate = useNavigate();


    async function sendRequest() {
        try{
            const response = await axios.post(`${BECKEND_URL}/api/v1/user/${type.toLowerCase().split(" ").join("").toLowerCase()=="signup"?"signup":"signin"}`,data)
            const jwt = await response.data
            const final = jwt.jwt
            
            
            
              localStorage.setItem("token",final)
            navigate('/blogs')

        }catch(e){
            console.log(e)
            alert("Error while signing up")
        }
    }

  return (
      <div className='flex justify-center items-center h-screen'>
        
        <div>
         
            <div className='max-w-sm'>
            <h1 className='text-4xl font-bold'>Create Free Account </h1>
            </div>
            <div className='pt-2 px-2'>
                
                <h3 className='text-slate-400 text-md'>Already have an account? <span><Link to={`/${type.split(" ").join("").toLowerCase() =="signup"?"signin":"signup"}` } className='underline hover:text-black'>{type.split(" ").join("").toLowerCase() =="signup"?"Login":"Signup"}</Link></span></h3>
            </div>
            {link == "Signin"? <div className='pt-5'>
                <InputData type='text' placeholder="Enter your name"  text="Enter your Name" onChange1={(e)=>{
                    setdata({
                        ...data,
                        name:e.target.value
                    })
                }}></InputData>
            </div>:<div></div>}
            <div className='pt-3'>
                <InputData type='email' placeholder="Enter your Email"  text="Enter your Email" onChange1={(e)=>{
                    setdata({
                        ...data,
                        email:e.target.value
                    })
                }}></InputData>
            </div>
            <div className='pt-3'>
                <InputData type='password' placeholder="Enter your password"  text="Enter your password" onChange1={(e)=>{
                    setdata({
                        ...data,
                        password:e.target.value
                    })
                }}></InputData>
            </div>
            <div className='pt-5'>
            <button type="button" onClick={sendRequest} className="text-white w-full  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type}</button>
            </div>
        </div>
    </div>
  )
}

export default Signupinputs

interface Signinptrefcrce{
    type?:string,
    placeholder:string,
    text:string,
    onChange1:(e:ChangeEvent<HTMLInputElement>)=>void
}

const InputData = ({type,placeholder,onChange1,text}:Signinptrefcrce)=>{
    return (<div>
        <div>
            <label  className="block mb-2 text-sm  text-gray-800 font-bold dark:text-white">{text}</label>
            <input type={type} onChange={onChange1} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
    </div>)
}
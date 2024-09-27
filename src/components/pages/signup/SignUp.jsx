import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignup from '../../../hooks/useSignup';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        email: "",
        dob: "", 
        bio: "",
        password: "",
        confirmPassword: "",
        gender: ""
    }); 

    const {loading, signup} = useSignup();

    const handleCheckboxChange = (gender)=> {
        setInputs({...inputs, gender})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await signup(inputs);

    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className=' w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop:blur-lg bg-opacity-0'>
            <h1 className=' text-3xl font-semibold text-center text-gray-300'>Sign Up <span className=' text-blue-500 '>LIV</span></h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className=' text-base label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder='Jon Dee' className=' w-full input input-bordered h-10'
                    value={inputs.fullName}
                    onChange={(e)=>setInputs({...inputs, fullName: e.target.value})} />
                </div>

                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className=' text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Jon' className=' w-full input input-bordered h-10' 
                    value={inputs.username}
                    onChange={(e)=>setInputs({...inputs, username: e.target.value})} />
                </div>

                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className=' text-base label-text'>Email</span>
                    </label>
                    <input type="text" placeholder='' className=' w-full input input-bordered h-10' 
                    value={inputs.email}
                    onChange={(e)=>setInputs({...inputs, email: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className=' text-base label-text'>Dob</span>
                    </label>
                    <input type="date" placeholder='' className=' w-full input input-bordered h-10' 
                    value={inputs.dob}
                    onChange={(e)=>setInputs({...inputs, dob: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className=' text-base label-text'>Bio</span>
                    </label>
                    <input type="text" placeholder='' className=' w-full input input-bordered h-10' 
                    value={inputs.bio}
                    onChange={(e)=>setInputs({...inputs, bio: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className=' text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='' className=' w-full input input-bordered h-10'
                    value={inputs.password}
                    onChange={(e)=>setInputs({...inputs, password: e.target.value})}  />
                </div>
                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className=' text-base label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder='' className=' w-full input input-bordered h-10'
                    value={inputs.confirmPassword}
                    onChange={(e)=>setInputs({...inputs, confirmPassword: e.target.value})}  />
                </div>
                {/* GENDER GOES HERE */}
                <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>

                <Link to="/login" className=' text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</Link>

                <div>
                    <button className=' btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>{loading ? <span className=' loading loading-spinner'></span> : "Sign Up" }</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default SignUp

// STARTER CODE FOR SIGNUP
// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className=' w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop:blur-lg bg-opacity-0'>
//             <h1 className=' text-3xl font-semibold text-center text-gray-300'>Sign Up <span className=' text-blue-500 '>ChatApp</span></h1>
//             <form action="">
//                 <div>
//                     <label htmlFor="" className='label p-2'>
//                         <span className=' text-base label-text'>Full Name</span>
//                     </label>
//                     <input type="text" placeholder='Jon Dee' className=' w-full input input-bordered h-10' />
//                 </div>

//                 <div>
//                     <label htmlFor="" className='label p-2'>
//                         <span className=' text-base label-text'>Usernmae</span>
//                     </label>
//                     <input type="text" placeholder='Jon' className=' w-full input input-bordered h-10' />
//                 </div>
//                 <div>
//                     <label htmlFor="" className='label p-2'>
//                         <span className=' text-base label-text'>Password</span>
//                     </label>
//                     <input type="password" placeholder='' className=' w-full input input-bordered h-10' />
//                 </div>
//                 <div>
//                     <label htmlFor="" className='label p-2'>
//                         <span className=' text-base label-text'>Confirm Password</span>
//                     </label>
//                     <input type="password" placeholder='' className=' w-full input input-bordered h-10' />
//                 </div>
//                 {/* GENDER GOES HERE */}
//                 <GenderCheckBox/>

//                 <a href="#" className=' text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</a>

//                 <div>
//                     <button className=' btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
//                 </div>
//             </form>
//         </div>
      
//     </div>
//   )
// }

// export default SignUp

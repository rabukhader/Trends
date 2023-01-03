import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import img from './img/register.jpg'



function Register() {
  let [user,setUser]= useState(
    {
      name : '',
      email : '',
      password : '',
      age : '',
    }
  )
  let submitFormData = async (e)=>{
    e.preventDefault();
    let {data} = await axios.post("https://knowledge-saraha.herokuapp.com/users/signUp",user); 
    
    
  }
  let getFormValue = (e)=>{
    let myUser={...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser);
  }
  
  return (
  <>
    <div className="container">
      <img src = {img} className='w-50 my-5 d-block ms-auto me-auto' alt='Register' title='Register' />
       <form onSubmit={submitFormData}>
        <div className="my-3">
          <label htmlFor="first_name" className="form-label"> Name</label>
          <input type="text" onChange={getFormValue} name='name' className="form-control" id="name" aria-describedby="emailHelp" placeholder='Enter Your First Name' />
        </div>
       {/*  <div className="my-3">
          <label htmlFor="last_name" className="form-label">Last Name</label>
          <input type="text" onChange={getFormValue} name='last_name' className="form-control" id="last_name" aria-describedby="emailHelp" placeholder='Enter Your Last Name' />
        </div> */}
        <div className="my-3">
          <label htmlFor="email" className="form-label">E-mail Address</label>
          <input type="email" onChange={getFormValue} name='email' className="form-control" id="email" aria-describedby="emailHelp" placeholder='Enter Your E-mail Address'  />
        </div>
        <div className="my-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" onChange={getFormValue} name='password' className="form-control" id="password" placeholder='Enter Your Password' />
        </div>
        <div className="my-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="number" onChange={getFormValue} name='age' className="form-control" id="age" aria-describedby="emailHelp" placeholder='Enter Your Age' />
        </div>
        
        <button type="submit" className="btn btn-primary mt-4">Register</button>
      </form>
    </div>
  </>
  )
}

export default Register
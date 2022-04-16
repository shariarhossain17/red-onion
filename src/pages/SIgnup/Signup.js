import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo2.png";





const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error2,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

  
    const [userInfo,setUserInfo] = useState({
      name:"",
      email:"",
      password:"",
      confirmPass:""
    })
    const [error,setError] =useState({
      name:"",
      email:"",
      password:"",
      confirmPass:""
    })
    
    const handleName = event => {
      setUserInfo({...userInfo,name:event.target.value})
    }
    const handleEmail = event =>{
     const validEmail =  /.+@[^@]+\.[^@]{2,}$/.test(event.target.value)
     if(validEmail){
       setUserInfo({...userInfo,email:event.target.value})
       setError({...error,email:""})
     }
     else{
       setError({...error,email:"invalid email"})
     }
    }
    const handlePassword = event =>{
      const validPassword = /.{6,}/.test(event.target.value)
      if(validPassword){
        setUserInfo({...userInfo,password:event.target.value})
        setError({...error,password:""})
      }
      else{
        setError({...error,password:"password minimum 6 character"})
      }
    }
    const handleConfirmPassword = event =>{
      const password = userInfo.password
      const confirmPass = event.target.value
      if(password === confirmPass ){
        setUserInfo({...userInfo,confirmPass:event.target.value})
        setError({...error,confirmPass:""})
      }
      else{
        setError({...error,confirmPass:"dont match password"})
      }
    }
    const handleSubmit = event =>{
      event.preventDefault()
        createUserWithEmailAndPassword(userInfo.email,userInfo.password)
      
    }
    
  return (
    <div className="form">
      <div className="form-container">
        <div className=" mb-20">
          <img className="mx-auto" width={250} src={logo} alt="" />
        </div>
        <form onClick={handleSubmit} action="">
          <input onChange={handleName} type="text" name="name" id="text" placeholder="Name" required/>
          <input onChange={handleEmail} type="email" name="email" id="text" placeholder="Email" required/>
          <p className="m-0 text-red-600">{error.email}</p>
          <input onChange={handlePassword} type="password" name="password" id="text" placeholder="password" required/>
          <p className="m-0 text-red-600">{error.password}</p>
          <input onChange={handleConfirmPassword} type="password" name="confirmpass" id="text" placeholder="confirm password" required/>
          <p className="text-red-600">{error.confirmPass}</p>
          <button className="bg-red-600 rounded w-4/5 py-2 text-white mb-4">
            signup
          </button>
        </form>
        <p>
          Already Have account?
          <Link className="text-red-600" to="/login">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

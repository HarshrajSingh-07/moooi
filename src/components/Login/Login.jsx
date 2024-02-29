import React, { useEffect, useState } from 'react'
import './Login.css'
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import firebase from 'firebase/app';
import 'firebase/auth';
import { auth } from '../../firebase';


const Login = () => {

  const [data, setData] = useState({
    email: "", password: ""
  })
  const[error,setErrors]=useState({
    email:"" , password:""
  })
  useEffect(()=>{
    console.log(data)
  },[data])
  const handleLoginInputs = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

  }
  const handleSignIn = (e) => {
    
    e.preventDefault();
    const newErrors={}
    if (!data.email || data.email.length < 3) {
      newErrors.email = "Please enter a valid email address";
     
    }
    if (!data.password || data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    
    }
    setErrors(newErrors)
    
    if(Object.keys(newErrors).length===0){
   
      handleSignInWithFirebase(data.email,data.password)
    }
  }
  const handleSignInWithFirebase = async (email, password) => {
  
    try {
      
        const res=await signInWithEmailAndPassword(auth,email, password);
        console.log(res);
       
    } catch (error) {
        setErrors(error.message);
    }
};

  return (
    <section id="login">
      <div className="loginContainer ">
        <h3>Good day!</h3>
        <p>Fill in your e-mail address and password to log in or create an Account.</p>
        <form onSubmit={handleSignIn}>
          <div className="loginfields">
            <label>E-mail address*</label>
            <input type="email" name="email" autoComplete="off" value={data.email} onChange={handleLoginInputs} />
          </div>
          <div className="loginfields">
            <label>Password*</label>
            <input type="password" name="password" autoComplete="off" value={data.password} onChange={handleLoginInputs} />
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
    </section>
  )
}

export default Login



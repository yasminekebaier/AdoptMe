import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const handleLogin =(e) =>{
        e.preventDefault();
        const emailError = document.querySelector('.emailerreur');
        const passwordError =document.querySelector('.Password.erreur')
        axios({method:"post",
    url:`${process.env.REACT_APP_API_URL}Api/users/login`,
withCredentials:true,
data:{
    email,
    password,
},})
.then((res) => {
    console.log(res); 
    if(res.data.errors){
    emailError.innerHTML=res.data.errors.email;
    passwordError.innerHTML=res.data.errors.password;
}else{window.location ='/feed'}
}).catch((err) => {
    console.log(err);
});
}

  return (
    <div>
        <section className='slide-form'>
    <div className='container'>
      <h2>Sign in </h2>
      <p>Enter your e-mail and password below to log into your account </p>
      <form action='' onSubmit={handleLogin}>
      <input type='text' name='email' placeholder='Email'
       onChange={(e) =>setEmail(e.target.value)}value={email} />
       <div className="emailerreur"></div><br/>
      <input type='password' name='password' placeholder='Password' 
      onChange={(e) =>setPassword(e.target.value)}value={password}/>
       <div className="Password erreur"></div><br/>
    <input type='Submit'  value='se connecter' className='Submit'placeholder='check In' />
          
              
      </form>
    </div>
  </section>
    </div>
  )
}

export default Login